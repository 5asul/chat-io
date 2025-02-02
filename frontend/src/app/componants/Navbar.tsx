"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

function Navbar() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  return (
    <main>
      <nav className="bg-blue-500 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Chat App</h1>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-white hover:text-gray-200 mx-2">
              Home
            </Link>
            <Link href="/chat-room" className="text-white hover:text-gray-200 mx-2">
              Rooms
            </Link>
            <Link href="/create" className="text-white hover:text-gray-200 mx-2">
              Create
            </Link>
            {user ? (
              
                <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition mx-2"
              >
                Logout
              </button>
             
              

            ) : (
              <Link href="/login" className="text-white hover:text-gray-200 mx-2">
                Login
              </Link>
            )}
          </div>
          <div className="md:hidden ">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link href="/" className="block text-white hover:text-gray-200">
              Home
            </Link>
            <Link href="/chat-room" className="block text-white hover:text-gray-200">
              Rooms
            </Link>
            <Link href="/create" className="block text-white hover:text-gray-200">
              Create
            </Link>
            {user ? (
              <button
                onClick={logout}
                className="block w-full text-left bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <Link href="/login" className="block text-white hover:text-gray-200">
                Login
              </Link>
            )}
          </div>
        )}
        
      </nav>
    </main>
  );
}

export default Navbar;