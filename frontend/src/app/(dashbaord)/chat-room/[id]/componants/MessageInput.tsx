import { useMessages } from "@/hooks/useMessages";
import React, { useState } from "react";

function MessageInput({ roomId }: { roomId: string }) {
  const {sendMessage}=useMessages();
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await sendMessage(message, roomId); // '1' هو ID المستخدم (يمكن استبداله بـ user.id من الـ AuthContext)
        setMessage(''); // Clear input field after sending message
        
      } catch (error) {
        console.error(error);
      }
    };
  
  return (
    <main>
      <div >
        
        <div className="flex items-center my-7 space-x-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
          />
          <button  onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Send
          </button>
        </div>
      </div>
    </main>
  );
}

export default MessageInput;
