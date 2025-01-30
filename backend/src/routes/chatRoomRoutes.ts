import express from 'express';
import { create, getById, getAll } from '../controllers/chatRoomController';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/create',authenticate, create);
router.get('/:roomId',authenticate, getById);
router.all('/',authenticate,getAll)

export default router;