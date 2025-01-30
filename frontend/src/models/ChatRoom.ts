import { Message } from "./Message";
import { User } from "./User";

export interface ChatRoom {
    id: number;
    name: string;
    users: User[]; // Updated to match the API response
    messages: Message[]; // Added to match the API response
    
  }