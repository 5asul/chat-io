import prisma from '../config/db';

export const createChatRoom = async (name: string, userIds: number[]) => {
  return prisma.chatRoom.create({
    data: {
      name,
      users: { connect: userIds.map((id) => ({ id })) },
    },
  });
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