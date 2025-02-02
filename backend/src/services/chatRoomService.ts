import { getAllChatRoomsModel ,createChatRoomModel, deleteChatRoomModel, getChatRoomByIdModel,getAllUsersModel } from '../models/chatRoomModel';



export const createRoom = async (name: string,userIds:number[],userId:number) => {
  const allUserIds = [...userIds, userId];
  return createChatRoomModel(name, allUserIds);
};

export const getRoom = async (roomId: number,user: number) => {
  return getChatRoomByIdModel(roomId,user);
};
export const getAllRooms = async (user:number) => {
  return getAllChatRoomsModel(user);
};

export const getAllUsers = async (userId:number) => {
  return getAllUsersModel(userId);
};

export const deleteRoom = async (roomId: number,userId:number) => {
  return deleteChatRoomModel(roomId,userId);
};