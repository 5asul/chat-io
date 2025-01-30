import React from "react";

function MessageInput() {
  return (
    <main>
      <div className="mt-52">
        <h2 className="text-xl font-semibold mb-4">Message...</h2>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Send
          </button>
        </div>
      </div>
    </main>
  );
}

export default MessageInput;
