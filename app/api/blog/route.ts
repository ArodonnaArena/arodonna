import { NextRequest } from 'next/server'
import { createBlogPost, listBlogPosts } from '@/lib/blog-db'

export async function GET(req: NextRequest) {
  const includeUnpublished = req.nextUrl.searchParams.get('all') === '1'
  const posts = await listBlogPosts({ includeUnpublished })
  return Response.json(posts)
}

export async function POST(req: NextRequest) {
  const key = req.headers.get('x-admin-key') || req.nextUrl.searchParams.get('key')
  if (!process.env.ADMIN_KEY || key !== process.env.ADMIN_KEY) {
    return new Response('Unauthorized', { status: 401 })
  }

  const { title, slug, excerpt, content, coverImage, published } = await req.json()
  if (!title || !slug || !content) {
    return new Response('Missing fields', { status: 400 })
  }

  const post = await createBlogPost({ title, slug, excerpt, content, coverImage, published })
  return Response.json(post, { status: 201 })
}