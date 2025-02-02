// src/app/api/chat-rooms/[id]/route.ts
import { NextResponse } from 'next/server';
import { ENDPOINTS } from '@/constants/endpoints';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = await params;
  const authHeader = request.headers.get('Authorization');

  if (!authHeader) {
    return NextResponse.json({ error: 'Authorization header missing' }, { status: 401 });
  }

  try {
    // Simulate a call to your backend
    const response = await fetch(`${ENDPOINTS.CHAT_ROOMS}/${id}`,{
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json' ,
        'Authorization': authHeader, // Forward the Authorization header
  
      },
    }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch chat room');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching chat room:', error);
    return NextResponse.json({ error: 'Chat room not found' }, { status: 404 });
  }
}

