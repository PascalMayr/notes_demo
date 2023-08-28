import { PrismaClient } from '@prisma/client'

// Create prisma orm client
const prisma = new PrismaClient({
  // log levels
  log: ['query', 'info', 'warn', 'error'],
})

export default prisma
