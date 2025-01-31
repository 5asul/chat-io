"use client";

import React from "react";
import SideBar from "./componants/SideBar";
import MessagesList from "./componants/MessagesList";
import MessageInput from "./componants/MessageInput";
import { useParams } from "next/navigation";

export const dynamicParams = true // default val = true
function ChatRoom() {
  const params = useParams();
  const roomId = params.id as string; // Extract roomId from the URL
  return (
    <div className=" bg-gray-100 flex flex-col" >
      <div className="flex flex-1">
        <SideBar roomId={roomId}/>

        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg ml-4 flex flex-col">
          <MessagesList roomId={roomId} />
          <MessageInput roomId={roomId}  />
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
