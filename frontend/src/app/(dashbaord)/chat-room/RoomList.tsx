"use client"

import Link from 'next/link';
import { useChatRooms } from '@/hooks/useChatRooms';

const RoomList = () => {
  const { chatRooms, isLoading } = useChatRooms();

  if (isLoading) {
    return <p>Loading chat rooms...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {chatRooms?.map((room) => (
          <Link key={room.id} href={`/chat-room/${room.id}`} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{room.name}</h2>
            
            <div className="mb-2">
              <h3 className="text-lg font-semibold">Users:</h3>
              <ul className="list-disc list-inside">
                {room.users.map((user) => (
                  <li key={user.id}>{user.username}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Messages:</h3>
              <ul className="list-disc list-inside">
                {room.messages.map((message) => (
                  <li key={message.id}>
                    <strong>{message.sender.username}:</strong> {message.content}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RoomList;