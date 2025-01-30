import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <main>
      <nav className="bg-blue-500 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Chat App</h1>
          <div>

            <Link href="/" className="text-white hover:text-gray-200 mx-2">
              Home
            </Link>
            <Link href="/chat-room" className="text-white hover:text-gray-200 mx-2">
              Rooms
            </Link>
            <Link href="/create" className="text-white hover:text-gray-200 mx-2">
              Create
            </Link>
          </div>
        </div>
      </nav>
    </main>
  );
}

export default Navbar;
