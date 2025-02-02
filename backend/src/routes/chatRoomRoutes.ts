import express from 'express';
import { createController, getByIdController, getAllController, deleteByIdController,getAllUsersController } from '../controllers/chatRoomController';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/create',authenticate, createController);
router.delete('/delete/:roomId', authenticate,deleteByIdController);
router.all('/getUsers', authenticate,getAllUsersController);
router.get('/:roomId',authenticate, getByIdController);
router.all('/',authenticate,getAllController)


export default router;