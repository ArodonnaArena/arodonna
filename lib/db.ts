// Prisma client singleton to avoid instantiating multiple times in dev
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

// Only create Prisma client if DATABASE_URL is available
let prisma: PrismaClient | null = null

if (process.env.DATABASE_URL) {
  prisma = globalForPrisma.prisma ?? new PrismaClient()
  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
}

export { prisma }
export default prisma
