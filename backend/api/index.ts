import { handler } from '../src/server';
import prisma from '../src/config/db';

export default async (req: any, res: any) => {
  // Pre-connection check
  await prisma.$connect().catch(console.error);

  // Set timeout fallback
  const timeoutPromise = new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Function timeout')), 25000)
  );

  try {
    return await Promise.race([
      handler(req, res),
      timeoutPromise
    ]);
  } finally {
    await prisma.$disconnect().catch(console.error);
  }
};