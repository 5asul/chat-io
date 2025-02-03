import { PrismaClient } from '@prisma/client';

class PrismaConnection {
  private static instance: PrismaClient;
  private static connectionCount = 0;

  public static getInstance(): PrismaClient {
    if (!PrismaConnection.instance) {
      PrismaConnection.instance = new PrismaClient({
        log: [
          { level: 'warn', emit: 'event' },
          { level: 'error', emit: 'event' }
        ],
        datasourceUrl: process.env.DATABASE_URL
      });

      // Add connection monitoring
      PrismaConnection.instance.$on('query' as never, (e: any) => {
        if (e.duration > 2000) {
          console.warn('Slow query detected:', e.query, e.duration + 'ms');
        }
      });
    }

    PrismaConnection.connectionCount++;
    console.log(`Active connections: ${PrismaConnection.connectionCount}`);
    
    return PrismaConnection.instance;
  }
}

export default PrismaConnection.getInstance();