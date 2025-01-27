import express from 'express';
import cors from 'cors';
import userRoutes from './routes/authRoutes';
import messageRoutes from './routes/messageRoutes';
import chatRoomRoutes from './routes/chatRoomRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', userRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/chat-rooms', chatRoomRoutes);

export default app;