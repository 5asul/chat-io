import Link from "next/link";

export default function Home() {
  return (
    <div className=" container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Chat IO</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">Your Rooms</h2>
          <ul className="list-disc list-inside">
            {/* Replace with dynamic room list */}
            <li>Room 1</li>
            <li>Room 2</li>
            <li>Room 3</li>
          </ul>
          
            <Link href="/chat-room" className="text-blue-500 hover:underline mt-2 inline-block">View All Rooms</Link>
          
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">Create a New Room</h2>
          <p className="mb-4">Start a new conversation by creating a room.</p>
          
            <a href="/create" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create Room</a>
          
        </div>
      </div>
    </div>
  );
}