"use client"


import { useState, useEffect, useCallback } from 'react';
import { ChatRoom } from '../models/ChatRoom';
import { useAuth } from './useAuth';
import { Message } from '@/models/Message';
import { User } from '@/models/User';
import { AllUsers } from '@/models/AllUsers';





export const useChatRooms = () => {
  const [allUsers, setAllUsers] = useState<AllUsers[]>([]);
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);
  const[messages,setMessages] = useState<Message[]>([]);
  const[users,setUsers] = useState<User[]>([]);
  const { token } = useAuth();
  const [error, setError] = useState<string | null>(null);
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
  
      // Read the response as text first
      const responseText = await response.text();
      console.log("Raw response:", responseText); // Debugging output
  
      if (!response.ok) {
        console.error(`Error creating chat room, status: ${response.status}`);
        throw new Error(`Failed to create chat room: ${response.status}`);
      }
  
      // Check if response is JSON before parsing
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = JSON.parse(responseText);
        console.log("Backend Response:", data);
  
        // Update the chat rooms state
        setChatRooms((prevChatRooms) => [...prevChatRooms, data.data]);
      } else {
        console.error("Unexpected response format:", responseText);
      }
    } catch (error) {
      console.error('Error creating chat room:', error);
    }
  };


const fetchChatRoom = async (id: string) => {
  if (!token) {
    console.error('Token is missing');
    return null;
  }

  try {
    const response = await fetch(`/api/chat-room/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      setIsLoading(true)
      throw new Error(`Failed to fetch chat room: ${response.status}`);
    }
    setIsLoading(false)
    const data = await response.json();
    const messages= data.data.messages;
    const users = data.data.users;
    setMessages(messages||[]);
    setUsers(users||[]);

    return data; // Return the entire data object
  } catch (error) {
    console.error('Error fetching chat room:', error);
    return null;
  }
};

  const fetchChatRooms = useCallback(async () => {
    try {
      setIsLoading(true); // Set loading to true

      const response = await fetch('/api/chat-room',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
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
  },[token])

  const fetchUsers = useCallback(async () => {
    try {

      const response = await fetch('/api/chat-room/getUsers',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
             'Authorization': `Bearer ${token}`,        },
      });
      const result = await response.json(); // Extract the response
      const allUsers = result.data; // Access the `data` array
      setAllUsers(allUsers || []); // Fallback to empty array if `data` is undefined
    } catch (error) {
      console.error('Error fetching chat rooms:', error);
      setAllUsers([]); // Set to empty array on error
    } finally {
      setIsLoading(false); // Set loading to false
    }
  },[token])
  
  useEffect(() => {
    if (token) {
      fetchChatRooms();
      fetchUsers();
    }
  }, [token,fetchChatRooms,fetchUsers]);

  const deleteChatRoom = async (id: string) => {
    setIsLoading(true);
    setError(null);
    if (!token) {
      console.error('Token is missing');
      return null;
    }

    try {
      const response = await fetch(`/api/chat-room/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to delete chat room');
      }

      return result; // Return the result for further handling
    } catch (error) {
      console.error('Error deleting chat room:', error);
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return { error,deleteChatRoom,isLoading,messages,users,allUsers,chatRooms, createChatRoom, fetchChatRoom };
};


