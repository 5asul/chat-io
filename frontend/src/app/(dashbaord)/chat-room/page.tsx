import React, { Suspense } from 'react';
import RoomList from './RoomList';
import Loading from '@/app/componants/loading';

function ChatRoom() {
  return (
    <div className="min-h-fit flex flex-col">
      <header className="bg-blue-500 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Chat IO - Room List</h1>
        <p className="text-lg mt-2">Manage and join your chat rooms</p>
      </header>
      <Suspense fallback={<Loading/>}>
        <RoomList />
      </Suspense>
      
    </div>
  );
}

export default ChatRoom;