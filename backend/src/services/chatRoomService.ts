import { createChatRoom, getChatRoomById } from '../models/chatRoomModel';


export const createRoom = async (name: string,userIds:number[]) => {
  return createChatRoom(name, userIds);
};

export const getRoom = async (roomId: number,user: number) => {
  return getChatRoomById(roomId,user);
};