import { NextRequest } from 'next/server'
import { deleteBlogPost, getBlogPostBySlug, updateBlogPost } from '@/lib/blog-db'

export async function GET(_req: NextRequest, { params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)
  if (!post || (!post.published)) {
    return new Response('Not found', { status: 404 })
  }
  return Response.json(post)
}

export async function PUT(req: NextRequest, { params }: { params: { slug: string } }) {
  const key = req.headers.get('x-admin-key') || req.nextUrl.searchParams.get('key')
  if (!process.env.ADMIN_KEY || key !== process.env.ADMIN_KEY) {
    return new Response('Unauthorized', { status: 401 })
  }
  const patch = await req.json()
  const post = await updateBlogPost(params.slug, patch)
  return Response.json(post)
}

export async function DELETE(req: NextRequest, { params }: { params: { slug: string } }) {
  const key = req.headers.get('x-admin-key') || req.nextUrl.searchParams.get('key')
  if (!process.env.ADMIN_KEY || key !== process.env.ADMIN_KEY) {
    return new Response('Unauthorized', { status: 401 })
  }
  await deleteBlogPost(params.slug)
  return new Response(null, { status: 204 })
}