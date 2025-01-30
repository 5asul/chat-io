import prisma from '../config/db';

export const createChatRoom = async (name: string, userIds: number[]) => {
  return prisma.chatRoom.create({
    data: {
      name,
      users: { connect: userIds.map((id) => ({ id })) }, // Correctly formats userIds for Prisma
    },
    include: {
      users: true,
      
    },
  });
};
export const getAllChatRooms = async (userid:number) => {
  const chatRooms= await prisma.chatRoom.findMany({
    include: { users: true, messages: { include: { sender: true } } },
  });
  if (!chatRooms) {
    throw new Error('Chat room not found');
  }

  const userChatRooms = chatRooms.filter((chatRoom) => 
    chatRoom.users.some((user) => user.id === userid)
  );

  const isMember = userChatRooms.length > 0;
  if (!isMember) {
    throw new Error('You are not a member of any chat room');
  }

  return chatRooms;
};

export const getChatRoomById = async (roomId: number, userid:number) => {
  const chatRoom = await prisma.chatRoom.findUnique({
    where: { id: roomId },
    include: { users: true, messages: { include: { sender: true } } },
  });
  if (!chatRoom) {
    throw new Error('Chat room not found');
  }

  const isMember = chatRoom.users.some((user) => user.id === userid );
  if (!isMember) {
    throw new Error('You are not a member of this chat room');
  }

  return chatRoom;
};