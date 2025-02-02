import { Request, Response } from 'express';
import { createRoom, deleteRoom, getRoom } from '../services/chatRoomService';
import {HTTP_STATUS} from '../constants/statusCodes';
import { getAllRooms } from '../services/chatRoomService';

export const create = async (req: Request, res: Response) => {
  const { name, userIds } = req.body;
  const userId = (req as any).user.userId; // Use the authenticated user's ID
  
  try {
    // Include the authenticated user's ID in the userIds array

    const room = await createRoom(name, userIds, userId);
    res.status(HTTP_STATUS.CREATED).json({ message: 'Chat room created', data: room });
  } catch (error: any) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({ error: error.message });
  }
};

export const getById = async (req: Request, res: Response) => {
  const { roomId } = req.params;
  const userId = (req as any).user.userId;
  try {
    const room = await getRoom(Number(roomId), userId);
    res.status(HTTP_STATUS.OK).json({ data: room });
  } catch (error:any) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({ error: error.message });
  }
};


export const getAll = async (req: Request, res: Response) => {
  const userId = (req as any).user.userId;
  try {
    const rooms = await getAllRooms(userId);
    res.status(HTTP_STATUS.OK).json({ data: rooms });
  } catch (error: any) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({ error: error.message });
  }
};

export const deleteById = async (req: Request, res: Response)=>{
  const { roomId } = req.params;
  const userId = (req as any).user.userId;
  try {
    await deleteRoom(Number(roomId), userId);
    res.status(HTTP_STATUS.NO_CONTENT).json({ message: 'Chat room deleted' });
  } catch (error: any) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({ error: error.message });
  }
}