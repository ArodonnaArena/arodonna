import prisma from './db'

export type NewProjectInput = {
  name: string
  description: string
  href: string
  image?: string
}

export async function listProjects() {
  return prisma.project.findMany({ orderBy: { createdAt: 'desc' } })
}

export async function createProject(input: NewProjectInput) {
  return prisma.project.create({ data: input })
}

export async function updateProject(id: string, patch: Partial<NewProjectInput>) {
  return prisma.project.update({ where: { id }, data: patch })
}

export async function deleteProject(id: string) {
  return prisma.project.delete({ where: { id } })
}