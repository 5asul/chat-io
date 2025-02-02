import { getAllChatRooms ,createChatRoom, deleteChatRoom, getChatRoomById } from '../models/chatRoomModel';



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

export const deleteRoom = async (roomId: number,userId:number) => {
  return deleteChatRoom(roomId,userId);
};