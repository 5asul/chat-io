import prisma from '../config/db';

export const createMessage = async (content: string, senderId: number, roomId: number) => {
  
  if (isNaN(senderId) || isNaN(roomId)) {
    throw new Error('Invalid senderId or roomId');
  }
  return prisma.message.create({
    data: { 
      content,
      sender: { connect: { id: senderId } }, // Connect existing sender by ID
      room: { connect: { id: roomId } },  
    },
  });
};

export const getMessagesByRoom = async (roomId: number) => {
  return prisma.message.findMany({
    where: { roomId },
    include: { sender: true },
  });
};
