import { Request, Response } from 'express';
import { createRoom, getRoom } from '../services/chatRoomService';
import {HTTP_STATUS} from '../constants/statusCodes';

export const create = async (req: Request, res: Response) => {
  const { name,userIds} = req.body;
  // const userId = (req as any).user.userId;
  try {
    const room = await createRoom(name, userIds);
    res.status(HTTP_STATUS.CREATED).json({ message: 'Chat room created', data: room });
  } catch (error:any) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({ error: error.message });
  }
};

export const get = async (req: Request, res: Response) => {
  const { roomId } = req.params;
  const userId = (req as any).user.userId;
  try {
    const room = await getRoom(Number(roomId), userId);
    res.status(HTTP_STATUS.OK).json({ data: room });
  } catch (error:any) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({ error: error.message });
  }
};