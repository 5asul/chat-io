"use client";

import React, { useState } from "react";
import SideBar from "./componants/SideBar";
import MessagesList from "./componants/MessagesList";
import MessageInput from "./componants/MessageInput";
import { useParams } from "next/navigation";

export const dynamicParams = true; // default val = true

function ChatRoom() {
  const params = useParams();
  const roomId = params.id as string; // Extract roomId from the URL
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className=" bg-gray-100 flex flex-col min-h-screen">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden bg-blue-500 text-white p-2 m-2 rounded  top-0 left-0 z-50"
      >
        {isSidebarOpen ? "Close Menu" : "Open Menu"}
      </button>

      <div className="flex flex-1 flex-col md:flex-row ">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block w-full md:w-1/3 lg:w-1/4 fixed md:pt-4  md:relative  z-40`}
        >
          <SideBar roomId={roomId} className="w-full h-full   " />
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg  md:mt-4 md:ml-4 flex flex-col">
          <MessagesList roomId={roomId} />
          <MessageInput roomId={roomId} />
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
