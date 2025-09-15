import { NextRequest } from 'next/server'
import { createProject, listProjects } from '@/lib/projects-db'

export async function GET() {
  const projects = await listProjects()
  return Response.json(projects)
}

export async function POST(req: NextRequest) {
  const key = req.headers.get('x-admin-key') || req.nextUrl.searchParams.get('key')
  if (!process.env.ADMIN_KEY || key !== process.env.ADMIN_KEY) {
    return new Response('Unauthorized', { status: 401 })
  }

  const { name, description, href, image } = await req.json()
  if (!name || !description || !href) {
    return new Response('Missing fields', { status: 400 })
  }

  const project = await createProject({ name, description, href, image })
  return Response.json(project, { status: 201 })
}