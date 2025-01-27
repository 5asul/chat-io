import { createMessage, getMessagesByRoom } from '../models/messageModel';

export const sendMessage = async (content: string, senderId: number, roomId: number) => {
  return createMessage(content, senderId, roomId);
};

export const fetchMessages = async (roomId: number) => {
  return getMessagesByRoom(roomId);
};