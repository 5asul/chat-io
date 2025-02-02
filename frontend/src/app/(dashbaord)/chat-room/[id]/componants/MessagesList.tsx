"use client";

import { useChatRooms } from '@/hooks/useChatRooms';
import React, { useEffect } from 'react';

function MessagesList({ roomId }: { roomId: string }) {
  const { messages, fetchChatRoom } = useChatRooms();

  useEffect(() => {
    fetchChatRoom(roomId);
  }, [roomId, fetchChatRoom]);

  return (
    <div className="flex-none overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-4">Chat Room</h2>
      <div className="space-y-2 h-[600px] overflow-y-auto">
        {messages.map((m) => (
          <ul key={m.id} className="space-y-4">
            <li className="bg-gray-200 p-4 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center">
                  {m.sender.username[0]}
                </div>
                <div>
                  <div className="font-medium">{m.sender.username}</div>
                  <div className="text-sm text-gray-600">{m.createdAt}</div>
                </div>
              </div>
              <div className="mt-2">{m.content}</div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default MessagesList;