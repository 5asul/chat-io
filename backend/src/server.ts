import serverless from 'serverless-http';
import app from './app';
import { PORT } from './config/env';

// Local development server
if (process.env.NODE_ENV === 'development') {
  app.listen(PORT, () => {
    console.log(`Local server running on port ${PORT}`);
  });
}

// Vercel serverless handler
export const handler = serverless(app);