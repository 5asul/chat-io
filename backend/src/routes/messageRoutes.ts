import express from 'express';
import { send, getMessages } from '../controllers/messageController';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/send',authenticate, send);
router.get('/:roomId', authenticate, getMessages);

export default router;