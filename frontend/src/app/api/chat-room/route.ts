import { NextResponse } from 'next/server';
import { ENDPOINTS } from '@/constants/endpoints';

export async function GET(request: Request) {

  const authHeader = request.headers.get('Authorization');
  // Simulate a call to your backend
  const response = await fetch(ENDPOINTS.CHAT_ROOMS,{
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json' ,
      'Authorization': `Bearer ${authHeader}`, // Forward the Authorization header

    },
    credentials: 'include' // Include cookies for authenticated requests
  });

  const data = await response.json();

  if (response.ok) {
    return NextResponse.json(data);
  } else {
    return NextResponse.json({ error: 'Failed to fetch chat rooms' }, { status: 500 });
  }
}