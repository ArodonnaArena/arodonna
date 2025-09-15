import fs from 'fs/promises'
import path from 'path'

export type Project = {
  id: string
  name: string
  description: string
  href: string
  image?: string
  createdAt: string
}

const dataDir = path.join(process.cwd(), 'data')
const dbPath = path.join(dataDir, 'projects.json')

export async function ensureDb() {
  try {
    await fs.mkdir(dataDir, { recursive: true })
    await fs.access(dbPath)
  } catch {
    await fs.writeFile(dbPath, JSON.stringify([], null, 2), 'utf-8')
  }
}

export async function readProjects(): Promise<Project[]> {
  await ensureDb()
  const raw = await fs.readFile(dbPath, 'utf-8')
  return JSON.parse(raw)
}

export async function writeProjects(list: Project[]) {
  await fs.writeFile(dbPath, JSON.stringify(list, null, 2), 'utf-8')
}