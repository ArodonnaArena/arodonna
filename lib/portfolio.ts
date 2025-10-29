import fs from 'node:fs/promises'
import path from 'node:path'

export type Presentation = {
  title: string
  desc?: string
  href: string
  date?: string
  tags?: string[]
}

const dataDir = path.join(process.cwd(), 'data')
const filePath = path.join(dataDir, 'presentations.json')

async function ensureFile() {
  try {
    await fs.mkdir(dataDir, { recursive: true })
    await fs.access(filePath)
  } catch {
    await fs.writeFile(filePath, JSON.stringify([], null, 2), 'utf-8')
  }
}

export async function readPresentations(): Promise<Presentation[]> {
  await ensureFile()
  const raw = await fs.readFile(filePath, 'utf-8')
  try {
    const data = JSON.parse(raw)
    if (Array.isArray(data)) return data as Presentation[]
    return []
  } catch {
    return []
  }
}

export async function writePresentations(list: Presentation[]) {
  await ensureFile()
  await fs.writeFile(filePath, JSON.stringify(list, null, 2), 'utf-8')
}
