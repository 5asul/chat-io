import prisma from '../config/db';

export const createUser = async (userData: { username: string; email: string; password: string }) => {
  return prisma.user.create({
    data: userData,
  });
};

export const findUserByEmail = async (email: string) => {
  return prisma.user.findUnique({
    where: { email },
  });
};