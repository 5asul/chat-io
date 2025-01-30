"use client"


import { useState, useEffect } from 'react';
import { ChatRoom } from '../models/ChatRoom';
import { useAuth } from './useAuth';




export const useChatRooms = () => {
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);
  const { token } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  
  console.log('Token in useChatRooms:', token); // Log the token value

  const createChatRoom = async (name: string, userIds: number[]) => {
    if (!token) {
      console.error('Token not found in useChatRooms');
      return;
    }
  
    try {
      const response = await fetch('/api/chat-room/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ name, userIds }),
      });
      const responseText = await response.text(); // Read response as text first
      console.log("Raw response:", responseText); // Debugging output

      if (!response.ok) {
        console.error(`Error creating chat room, status: ${response.status}`);
        throw new Error(`Failed to create chat room: ${response.status}`);
      }

      const data = await response.json();
      console.log('Backend Response:', data); // Log the backend response
      if (!response.ok) {
        throw new Error('Failed to create chat room');
      }
  
      
      // Check if response is JSON before parsing
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = JSON.parse(responseText);
      console.log("Backend Response:", data);
      setChatRooms((prevChatRooms) => [...prevChatRooms, data.data]);
    } else {
      console.error("Unexpected response format:", responseText);
    }
    } catch (error) {
      console.error('Error creating chat room:', error);
    }
  };

  const fetchChatRoom = async (id: string) => {
    const response = await fetch(`/api/chat-room/${id}`,{
        headers: {
          'Authorization': `Bearer ${token}`,
        },
  
    });
    const data = await response.json();
    return data.chatRoom;
  };

  const fetchChatRooms = async () => {
    try {

      const response = await fetch('/api/chat-room',{
        headers: {
             'Authorization': `Bearer ${token}`,        },
      });
      const result = await response.json(); // Extract the response
      const chatRooms = result.data; // Access the `data` array
      setChatRooms(chatRooms || []); // Fallback to empty array if `data` is undefined
    } catch (error) {
      console.error('Error fetching chat rooms:', error);
      setChatRooms([]); // Set to empty array on error
    } finally {
      setIsLoading(false); // Set loading to false
    }
  };
  
  useEffect(() => {
    if (token) {
      fetchChatRooms();
    }
  }, [token]);

  return { isLoading,chatRooms, createChatRoom, fetchChatRoom };
};


