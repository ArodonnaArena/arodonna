// Generate JPG thumbnails for PDFs in public/presentations
// Requires Poppler (pdftoppm) installed and on PATH.
// Windows: https://github.com/oschwartz10612/poppler-windows/releases/
//   - Download latest, extract, add <poppler>/Library/bin to PATH
// Usage: npm run thumbs:presentations

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import pdf from 'pdf-poppler'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const pdfDir = path.join(root, 'public', 'presentations')
const thumbsDir = path.join(pdfDir, 'thumbs')
const dataFile = path.join(root, 'data', 'presentations.json')

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function listPdfs() {
  const items = await fs.readdir(pdfDir)
  return items.filter((f) => f.toLowerCase().endsWith('.pdf'))
}

async function convertFirstPage(pdfPath, base) {
  const opts = {
    format: 'jpeg',
    out_dir: thumbsDir,
    out_prefix: base,
    page: 1,
    // You can uncomment one of the following depending on desired quality
    // dpi: 144,
    // scale: 1024,
  }
  await pdf.convert(pdfPath, opts)
  // pdf-poppler outputs `${base}-1.jpg`; rename to `${base}.jpg`
  const outTemp = path.join(thumbsDir, `${base}-1.jpg`)
  const outFinal = path.join(thumbsDir, `${base}.jpg`)
  try {
    await fs.rename(outTemp, outFinal)
  } catch {
    // If already exists, overwrite
    try {
      const data = await fs.readFile(outTemp)
      await fs.writeFile(outFinal, data)
      await fs.unlink(outTemp)
    } catch {}
  }
  return outFinal
}

async function updateDataJson(map) {
  try {
    const raw = await fs.readFile(dataFile, 'utf-8')
    const arr = JSON.parse(raw)
    let changed = false
    const next = arr.map((item) => {
      const url = new URL(item.href, 'http://dummy')
      const name = url.pathname.split('/').pop() || ''
      const base = name.replace(/\.[^.]+$/, '')
      const thumbPath = `/presentations/thumbs/${base}.jpg`
      if (!item.thumb && map.get(base)) {
        changed = true
        return { ...item, thumb: thumbPath }
      }
      return item
    })
    if (changed) {
      await fs.writeFile(dataFile, JSON.stringify(next, null, 2), 'utf-8')
      console.log(`✅ Updated ${path.relative(root, dataFile)} with thumb paths`)
    }
  } catch (e) {
    // No data file or parse error; skip
  }
}

async function main() {
  console.log('🔎 Scanning for PDFs in', path.relative(root, pdfDir))
  await ensureDir(thumbsDir)
  const pdfs = await listPdfs()
  if (pdfs.length === 0) {
    console.log('ℹ️  No PDFs found. Put files in public/presentations/*.pdf')
    return
  }
  const created = new Map()
  for (const file of pdfs) {
    const base = file.replace(/\.[^.]+$/, '')
    const out = path.join(thumbsDir, `${base}.jpg`)
    try {
      // Skip if exists
      await fs.access(out)
      console.log(`↪︎  Thumb exists: ${path.basename(out)}`)
      created.set(base, out)
      continue
    } catch {}

    const full = path.join(pdfDir, file)
    try {
      console.log(`🖼️  Creating thumbnail for ${file} ...`)
      const final = await convertFirstPage(full, base)
      console.log(`✅  ${path.basename(final)}`)
      created.set(base, final)
    } catch (err) {
      console.error(`❌ Failed for ${file}:`, err?.message || err)
    }
  }

  await updateDataJson(created)
  console.log('Done.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
