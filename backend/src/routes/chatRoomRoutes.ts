import express from 'express';
import { create, get } from '../controllers/chatRoomController';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/create',authenticate, create);
router.get('/:roomId',authenticate, get);

export default router;