import React from "react";
import SideBar from "./componants/SideBar";
import MessagesList from "./componants/MessagesList";
import MessageInput from "./componants/MessageInput";

function ChatRoom() {
  return (
    <div className=" bg-gray-100 flex flex-col" >
      <div className="flex flex-1">
        <SideBar />

        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg ml-4 flex flex-col">
          <MessagesList />
          <MessageInput />
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
