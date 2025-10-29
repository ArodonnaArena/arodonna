import prisma from './db'

export type NewProjectInput = {
  name: string
  description: string
  href: string
  image?: string
}

export async function listProjects() {
  if (!prisma) {
    console.warn('No database connection available, returning empty projects array')
    return []
  }
  
  try {
    return await prisma.project.findMany({ orderBy: { createdAt: 'desc' } })
  } catch (error) {
    console.warn('Database connection failed, returning empty projects array')
    return []
  }
}

export async function createProject(input: NewProjectInput) {
  if (!prisma) {
    throw new Error('Database connection not available')
  }
  return prisma.project.create({ data: input })
}

export async function updateProject(id: string, patch: Partial<NewProjectInput>) {
  if (!prisma) {
    throw new Error('Database connection not available')
  }
  return prisma.project.update({ where: { id }, data: patch })
}

export async function deleteProject(id: string) {
  if (!prisma) {
    throw new Error('Database connection not available')
  }
  return prisma.project.delete({ where: { id } })
}
