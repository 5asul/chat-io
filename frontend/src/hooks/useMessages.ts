import { useState } from 'react';
import { Message } from '../models/Message';
import { useAuth } from './useAuth';

export const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const { token } = useAuth();

  const sendMessage = async (content: string, chatRoomId: string,) => {
    try {
      const response = await fetch('/api/messages/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ content, roomId: Number(chatRoomId) }),
      });
      const data = await response.json();
      const message = data.data;
      setMessages(message ||[]);
      
    } catch (error) {
      console.error('Error sending messages:', error);
      return null;
    }
  };

  const fetchMessage = async (id: string) => {
    const response = await fetch(`/api/messages/${id}`);
    const data = await response.json();
    return data.message;
  };

  return { messages, sendMessage, fetchMessage };
};