import { useState } from 'react';
import { Message } from '../models/Message';

export const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async (content: string, chatRoomId: string, senderId: string) => {
    const response = await fetch('/api/messages/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content, chatRoomId, senderId }),
    });
    const data = await response.json();
    setMessages([...messages, data.message]);
  };

  const fetchMessage = async (id: string) => {
    const response = await fetch(`/api/messages/${id}`);
    const data = await response.json();
    return data.message;
  };

  return { messages, sendMessage, fetchMessage };
};