import React from 'react'

function AuthNavbar() {
  return (
    <nav className="bg-blue-500 p-4">
    <div className="container  mx-auto flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">Chat Auth</h1>
      <div className='relative ml-5'>
        
          <a href="/register" className="text-white mx-1   hover:bg-blue-700 hover:text-gray-200 px-1 py-2 rounded-md text-sm font-medium">Sign up</a>
        
          <a href="/login" className="text-white mx-1 hover:bg-blue-700 hover:text-gray-200  px-1 py-2 rounded-md text-sm font-medium">Login</a>
        
      </div>
    </div>
  </nav>
  )
}

export default AuthNavbar