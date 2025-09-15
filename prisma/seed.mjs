import { PrismaClient } from '@prisma/client'
import fs from 'node:fs/promises'
import path from 'node:path'

const prisma = new PrismaClient()

async function main() {
  const dataPath = path.join(process.cwd(), 'data', 'projects.json')
  let items = []
  try {
    const raw = await fs.readFile(dataPath, 'utf-8')
    items = JSON.parse(raw)
    console.log(`Loaded ${items.length} projects from data/projects.json`)
  } catch (err) {
    console.warn('No data/projects.json found. Seeding with sample data...')
    items = [
      {
        name: 'Welcome Project',
        description: 'Replace this with your real project via the Admin page.',
        href: 'https://example.com',
        image: '/logo.svg',
        createdAt: new Date().toISOString()
      }
    ]
  }

  // Dev seed strategy: clear then insert
  await prisma.project.deleteMany({})

  const data = items.map((p) => ({
    id: p.id, // keep existing ids if present
    name: p.name,
    description: p.description,
    href: p.href,
    image: p.image ?? null,
    createdAt: p.createdAt ? new Date(p.createdAt) : undefined
  }))

  await prisma.project.createMany({ data })
  console.log(`Seeded ${data.length} projects.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })