import { Request, Response } from 'express';
import { sendMessage, fetchMessages } from '../services/messageService';
import { HTTP_STATUS } from '../constants/statusCodes';

export const send = async (req: Request, res: Response) => {
  const { content, roomId } = req.body;
  const senderId = (req as any).user.userId; // Extracted from auth middleware
  try {
    const message = await sendMessage(content, senderId, roomId);
    res.status(HTTP_STATUS.CREATED).json({ message: 'Message sent', data: message });
  } catch (error:any) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({ error: error.message });
  }
};

export const getMessages = async (req: Request, res: Response) => {
  const { roomId } = req.params;
  try {
    const messages = await fetchMessages(Number(roomId));
    res.status(HTTP_STATUS.OK).json({ data: messages });
  } catch (error:any) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({ error: error.message });
  }
};