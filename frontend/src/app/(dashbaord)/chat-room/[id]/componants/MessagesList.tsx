import React from 'react'

function MessagesList() {
  return (
    <div className="flex-1 mb-6 overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4">Chat Room</h2>
            <ul className="space-y-4">
              <li className="bg-gray-200 p-4 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center">
                    L
                  </div>
                  <div>
                    <div className="font-medium">Lawe</div>
                    <div className="text-sm text-gray-600">
                      29/07/2022, 19:31:16
                    </div>
                  </div>
                </div>
                <div className="mt-2">This is a message from Lawe.</div>
              </li>
              <li className="bg-gray-200 p-4 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center">
                    D
                  </div>
                  <div>
                    <div className="font-medium">Dan</div>
                    <div className="text-sm text-gray-600">
                      28/07/2022, 19:31:16
                    </div>
                  </div>
                </div>
                <div className="mt-2">This is a message from Dan.</div>
              </li>
            </ul>
          </div>
  )
}

export default MessagesList