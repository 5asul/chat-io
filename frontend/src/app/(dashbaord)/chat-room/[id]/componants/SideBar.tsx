import React from 'react'

function SideBar() {
  return (
    
        <aside className="w-1/4 bg-white p-6 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Users</h2>
          <ul className="space-y-4 flex-1 overflow-y-auto">
            <li className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition duration-300">
              <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center">
                U1
              </div>
              <div>
                <div className="font-medium">User 1</div>
                <div className="text-sm text-gray-600">Online</div>
              </div>
            </li>
            <li className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition duration-300">
              <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center">
                U2
              </div>
              <div>
                <div className="font-medium">User 2</div>
                <div className="text-sm text-gray-600">Offline</div>
              </div>
            </li>
            <li className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition duration-300">
              <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center">
                U3
              </div>
              <div>
                <div className="font-medium">User 3</div>
                <div className="text-sm text-gray-600">Online</div>
              </div>
            </li>
          </ul>
          <button className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300">
            Leave Chat
          </button>
        </aside>
    
  )
}

export default SideBar