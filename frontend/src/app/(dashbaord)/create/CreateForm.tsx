"use client";

import React, { useState } from 'react';
import {useChatRooms} from '@/hooks/useChatRooms';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

const CreateForm = () => {
  const [roomName, setRoomName] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const { createChatRoom } = useChatRooms();
  const { user } = useAuth();
  const router = useRouter();

  // Replace this with actual user fetching logic
  

    
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createChatRoom(roomName, [1]); // '1' هو ID المستخدم (يمكن استبداله بـ user.id من الـ AuthContext)
      router.push('/chat-room');
    } catch (error) {
      console.error(error);
    }
  };

 

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Create a New Room</h2>
      <div className="mb-6">
        <label htmlFor="roomName" className="block text-sm font-medium text-gray-700 mb-2">
          Room Name
        </label>
        <input
          type="text"
          id="roomName"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="users" className="block text-sm font-medium text-gray-700 mb-2">
          Add Users
        </label>
        <select
          id="users"
          multiple
          value={selectedUsers.map(String)}
          onChange={(e) => setSelectedUsers(Array.from(e.target.selectedOptions, option => Number(option.value)))}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          
            <option key={user?.id} value={user?.id}>
              {user?.username}
            </option>
          
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-indigo-600 transition"
      >
        Create Room
      </button>
    </form>
  );
};

export default CreateForm;


