"use client";

import Link from 'next/link';
import { useChatRooms } from '@/hooks/useChatRooms';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const RoomList = () => {
  const { chatRooms, isLoading, deleteChatRoom } = useChatRooms();
  const [deleting, setDeleting] = useState<number | null>(null);

  const handleDelete = async (roomId: number) => {
    setDeleting(roomId);
    try {
      await deleteChatRoom(String(roomId));
    } catch (error) {
      console.error('Error deleting chat room:', error);
    } finally {
      setDeleting(null);
    }
  };

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">
    <p className="text-xl font-semibold">Loading chat rooms...</p>
  </div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {chatRooms?.map((room) => (
          <div key={room.id} className="bg-white shadow-md rounded-lg p-6 relative">
            <Link href={`/chat-room/${room.id}`}>
              
                <h2 className="text-2xl font-semibold mb-2">{room.name}</h2>
                <div className="mb-2">
                  <h3 className="text-lg font-semibold">Users:</h3>
                  <ul className="list-disc list-inside">
                    {room.users.map((user) => (
                      <li key={user.id}>{user.username}</li>
                    ))}
                  </ul>
                </div>
              
            </Link>
            <div >
            <button
              onClick={() => handleDelete(room.id)}
              className="absolute top-2 right-2 rounded-full bg-slate-200 hover:bg-slate-400 p-2 text-red-500 hover:text-red-700"
              disabled={deleting === room.id}
            >
              <FaTrash  />
            </button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomList;