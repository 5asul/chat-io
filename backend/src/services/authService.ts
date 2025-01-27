import { createUser, findUserByEmail } from '../models/userModel';
import jwt from 'jsonwebtoken';


export const registerUser = async (userData: { username: string; email: string; password: string }) => {
  return createUser(userData);
};

export const loginUser = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (!user || user.password !== password) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string,{expiresIn: '1h'}); 
  return {user,token};
};