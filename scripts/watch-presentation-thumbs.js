// Watch public/presentations for PDF changes and create thumbs automatically
import chokidar from 'chokidar'
import path from 'node:path'
import fs from 'node:fs/promises'
import pdf from 'pdf-poppler'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const pdfDir = path.join(root, 'public', 'presentations')
const thumbsDir = path.join(pdfDir, 'thumbs')
const dataFile = path.join(root, 'data', 'presentations.json')

async function ensureDirs() {
  await fs.mkdir(thumbsDir, { recursive: true })
}

async function convert(pdfPath) {
  const base = path.basename(pdfPath).replace(/\.[^.]+$/, '')
  const out = path.join(thumbsDir, `${base}.jpg`)
  try {
    await fs.access(out)
    return out
  } catch {}
  const opts = { format: 'jpeg', out_dir: thumbsDir, out_prefix: base, page: 1 }
  await pdf.convert(pdfPath, opts)
  const temp = path.join(thumbsDir, `${base}-1.jpg`)
  try { await fs.rename(temp, out) } catch {}
  await upsertThumbInData(base)
  return out
}

async function upsertThumbInData(base) {
  try {
    const raw = await fs.readFile(dataFile, 'utf-8')
    const arr = JSON.parse(raw)
    const hrefSuffix = `${base}.pdf`
    let touched = false
    const next = arr.map((item) => {
      if (!item.href) return item
      const url = new URL(item.href, 'http://dummy')
      if ((url.pathname.endsWith(hrefSuffix) || url.pathname.includes(`/${base}.pdf`)) && !item.thumb) {
        touched = true
        return { ...item, thumb: `/presentations/thumbs/${base}.jpg` }
      }
      return item
    })
    if (touched) await fs.writeFile(dataFile, JSON.stringify(next, null, 2), 'utf-8')
  } catch {}
}

async function main() {
  await ensureDirs()
  console.log('👀 Watching presentations for thumbnails:', path.relative(root, pdfDir))
  const watcher = chokidar.watch('*.pdf', { cwd: pdfDir, ignoreInitial: false })

  const handle = async (file) => {
    try {
      const full = path.join(pdfDir, file)
      console.log(`🖼️  Generating thumbnail for ${file}...`)
      const out = await convert(full)
      console.log(`✅  ${path.basename(out)}`)
    } catch (e) {
      console.warn(`⚠️  Thumb failed for ${file}:`, e?.message || e)
    }
  }

  watcher.on('add', handle)
  watcher.on('change', handle)
}

main().catch((e) => {
  console.warn('Thumbnail watcher not started:', e?.message || e)
})
