import serverless from 'serverless-http';
import app from './app';
import { PORT } from './config/env';
import prisma from './config/db';

// Pre-warm database connection
const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log('Database pre-connected');
  } catch (error) {
    console.error('Pre-connection failed:', error);
  }
};

// Immediate connection attempt
connectDB();

// Local development
if (process.env.NODE_ENV === 'development') {
  app.listen(PORT, () => {
    console.log(`Local server running on port ${PORT}`);
  });
}

// Serverless handler with connection management
export const handler = serverless(app, {
  binary: ['image/*', 'application/pdf'],
  response: {
    encodeBody: false,
    contentTypesToEncode: ['application/octet-stream']
  }
});

// Connection cleanup
process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  console.log('Prisma connection closed');
});