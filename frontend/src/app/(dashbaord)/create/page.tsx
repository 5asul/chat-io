import React from 'react';
import CreateForm from './CreateForm';

export default function Create() {
  return (
    <div className="min-h-fit  flex flex-col">
      <header className="bg-blue-500 mb-6 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Create a New Room</h1>
        <p className="text-lg mt-2">Fill in the details below to create a new chat room</p>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <CreateForm />
      </main>
     
    </div>
  );
}