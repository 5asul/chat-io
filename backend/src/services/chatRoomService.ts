import { createChatRoom, getChatRoomById } from '../models/chatRoomModel';
import { getAllChatRooms } from '../models/chatRoomModel';


export const createRoom = async (name: string,userIds:number[],userId:number) => {
  const allUserIds = [...userIds, userId];
  return createChatRoom(name, allUserIds);
};

export const getRoom = async (roomId: number,user: number) => {
  return getChatRoomById(roomId,user);
};
export const getAllRooms = async (user:number) => {
  return getAllChatRooms(user);
};