"use client";

import { useChatRooms } from "@/hooks/useChatRooms";
import React, { useEffect } from "react";

function SideBar({
  roomId,
  className,
}: {
  roomId: string;
  className?: string;
}) {
  const { users, fetchChatRoom } = useChatRooms();

  useEffect(() => {
    fetchChatRoom(roomId);
  }, [roomId, fetchChatRoom]);

  return (
    <aside
      className={`bg-white h-36  p-6 md:h-full md:rounded-lg shadow-lg flex flex-col ${className}`}
    >
      {/* Sidebar Header */}
      <h2 className="text-xl font-semibold mb-4">Users</h2>

      {/* User List */}
      <div className="space-y-4 flex-1 overflow-y-auto">
        {users.map((user) => (
          <ul key={user.id} className="space-y-4">
            <li className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition duration-300">
              {/* User Avatar */}
              <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center">
                {user.username[0]}
              </div>

              {/* User Info */}
              <div>
                <div className="font-medium">{user.username}</div>
                <div className="text-sm text-gray-600">Online</div>
              </div>
            </li>
          </ul>
        ))}
      </div>

      {/* Leave Chat Button */}
      <button className="mt-6 bg-red-500  text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300">
        Leave Chat
      </button>
    </aside>
  );
}

export default SideBar;
