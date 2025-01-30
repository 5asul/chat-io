import { User } from "./User";

export interface Message {
    id: number;
    content: string;
    senderId: number;
    roomId: number;
    createdAt: string;
    sender: User;
  }