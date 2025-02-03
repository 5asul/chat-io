import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

// Add connection verification
prisma.$connect()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Connection error:', err));

export default prisma;