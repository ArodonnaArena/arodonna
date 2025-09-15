import { NextRequest } from 'next/server'
import { updateProject, deleteProject } from '@/lib/projects-db'

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const key = req.headers.get('x-admin-key') || req.nextUrl.searchParams.get('key')
  if (!process.env.ADMIN_KEY || key !== process.env.ADMIN_KEY) {
    return new Response('Unauthorized', { status: 401 })
  }

  const { id } = params
  const patch = await req.json()
  const updated = await updateProject(id, patch)
  return Response.json(updated)
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const key = req.headers.get('x-admin-key') || req.nextUrl.searchParams.get('key')
  if (!process.env.ADMIN_KEY || key !== process.env.ADMIN_KEY) {
    return new Response('Unauthorized', { status: 401 })
  }

  const { id } = params
  const removed = await deleteProject(id)
  return Response.json(removed)
}