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
  if (!prisma) {
    console.warn('No database connection available, returning empty blog posts array')
    return []
  }
  
  try {
    const where = options?.includeUnpublished ? {} : { published: true }
    return prisma.blogPost.findMany({ where, orderBy: { createdAt: 'desc' } })
  } catch (error) {
    console.warn('Database connection failed, returning empty blog posts array')
    return []
  }
}

export async function getBlogPostBySlug(slug: string) {
  if (!prisma) {
    console.warn('No database connection available, returning null for blog post')
    return null
  }
  
  try {
    return prisma.blogPost.findUnique({ where: { slug } })
  } catch (error) {
    console.warn('Database connection failed, returning null for blog post')
    return null
  }
}

export async function createBlogPost(input: NewBlogPostInput) {
  if (!prisma) {
    throw new Error('Database connection not available')
  }
  return prisma.blogPost.create({ data: { ...input, published: !!input.published } })
}

export async function updateBlogPost(slug: string, patch: UpdateBlogPostInput) {
  if (!prisma) {
    throw new Error('Database connection not available')
  }
  return prisma.blogPost.update({ where: { slug }, data: patch })
}

export async function deleteBlogPost(slug: string) {
  if (!prisma) {
    throw new Error('Database connection not available')
  }
  return prisma.blogPost.delete({ where: { slug } })
}
