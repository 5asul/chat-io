// src/app/api/messages/send/route.ts
import { NextResponse } from 'next/server';
import { ENDPOINTS } from '@/constants/endpoints';

export async function POST(request: Request) {
  const { roomId, content } = await request.json();
  const authHeader = request.headers.get('Authorization');

  if (!authHeader) {
    return NextResponse.json({ error: 'Authorization header missing' }, { status: 401 });
  }

  try {
    // Simulate a call to your backend
  const response = await fetch(`${ENDPOINTS.MESSAGES}/send`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json' ,
      'Authorization': authHeader, // Forward the Authorization header
    },
    body: JSON.stringify({ roomId, content }),
  });

  const data = await response.json();

  if (response.ok) {
    return NextResponse.json(data);
  } else {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 400 });
  }
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}