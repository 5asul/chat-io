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
export const getAllChatRooms = async (userid: number) => {
  // Fetch all chat rooms with their users and messages
  const chatRooms = await prisma.chatRoom.findMany({
    include: {
      users: true, // Include users in the chat room
      messages: { include: { sender: true } }, // Include messages and their senders
    },
  });

  if (!chatRooms) {
    throw new Error('No chat rooms found');
  }

  // Filter chat rooms where the user is a member
  const userChatRooms = chatRooms.filter((chatRoom) =>
    chatRoom.users.some((user) => user.id === userid)
  );

  // Check if the user is a member of any chat room
  if (userChatRooms.length === 0) {
    throw new Error('You are not a member of any chat room');
  }

  // Return only the chat rooms where the user is a member
  return userChatRooms;
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