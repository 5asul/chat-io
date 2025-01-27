import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/authService';
import {HTTP_STATUS} from '../constants/statusCodes';

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const user = await registerUser({ username, email, password });
    res.status(HTTP_STATUS.CREATED).json({ message: 'User registered', user });
  } catch (error:any) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({ error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const {user,token} = await loginUser(email, password);
    res.status(HTTP_STATUS.OK).json({ message: 'Login successful', data:{user,token} }); 
  } catch (error:any) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({ error: error.message });
  }
};