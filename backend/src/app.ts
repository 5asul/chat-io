
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/authRoutes';
import messageRoutes from './routes/messageRoutes';
import chatRoomRoutes from './routes/chatRoomRoutes';

const app = express();
const corsOptions = { 
    origin: 'https://ahmed-chat-io.vercel.app', 
    optionsSuccessStatus: 200 ,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  };
app.use(cors(corsOptions));

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Credentials", 'true');
    next()
  })
  app.options('*', cors(corsOptions)); // Enable preflight requests for all routes

app.use('/api/auth', userRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/chat-rooms', chatRoomRoutes);

export default app;