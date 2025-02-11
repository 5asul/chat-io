
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/authRoutes';
import messageRoutes from './routes/messageRoutes';
import chatRoomRoutes from './routes/chatRoomRoutes';

const app = express();

  
// Remove manual CORS middleware completely
app.use(cors());


app.use(express.json());


app.use('/api/auth', userRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/chat-rooms', chatRoomRoutes);

// Add this AFTER all routes
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Server Error:', err);
    res.status(500).json({
      error: process.env.NODE_ENV === 'production'
        ? 'Internal server error'
        : err.message
    });
  });

export default app;