import prisma from './db'

export type NewBlogPostInput = {
  title: string
  slug: string
  excerpt?: string
  content: string // Markdown
  coverImage?: string
  published?: boolean
}

export type UpdateBlogPostInput = Partial<NewBlogPostInput>

export async function listBlogPosts(options?: { includeUnpublished?: boolean }) {
  const where = options?.includeUnpublished ? {} : { published: true }
  return prisma.blogPost.findMany({ where, orderBy: { createdAt: 'desc' } })
}

export async function getBlogPostBySlug(slug: string) {
  return prisma.blogPost.findUnique({ where: { slug } })
}

export async function createBlogPost(input: NewBlogPostInput) {
  return prisma.blogPost.create({ data: { ...input, published: !!input.published } })
}

export async function updateBlogPost(slug: string, patch: UpdateBlogPostInput) {
  return prisma.blogPost.update({ where: { slug }, data: patch })
}

export async function deleteBlogPost(slug: string) {
  return prisma.blogPost.delete({ where: { slug } })
}