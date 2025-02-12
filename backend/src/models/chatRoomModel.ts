import prisma from '../config/db';

export const createChatRoomModel = async (name: string, userIds: number[]) => {
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
export const getAllChatRoomsModel = async (userid: number) => {
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

export const getChatRoomByIdModel = async (roomId: number, userid:number) => {
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

export const deleteChatRoomModel = async (roomId: number, userId: number) => {
  // Check if the chat room exists
  const chatRoom = await prisma.chatRoom.findUnique({
    where: { id: roomId },
    include: { users: true },
  });

  if (!chatRoom) {
    throw new Error('Chat room not found');
  }

  // Check if the user is a member of the chat room
  const isMember = chatRoom.users.some((user) => user.id === userId);
  if (!isMember) {
    throw new Error('You are not a member of this chat room');
  }

  // Delete the chat room
  const deletedRoom = await prisma.chatRoom.delete({
    where: { id: roomId },
  });

  return deletedRoom;
};

export const getAllUsersModel = async (userId: number) => {
  // Fetch all users
  const users = await prisma.user.findMany({
    where: { NOT: { id: userId } }, // Exclude the authenticated user
    select: {
      id: true,
      username: true, // Select only the username and id
    },
  });

  if (!users) {
    throw new Error('No users found');
  }

  return users;
};