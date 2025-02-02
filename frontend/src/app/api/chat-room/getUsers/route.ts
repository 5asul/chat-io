import { NextResponse } from 'next/server';
import { ENDPOINTS } from '@/constants/endpoints';

export async function GET(request: Request) {

  const authHeader = request.headers.get('Authorization');

  if (!authHeader) {
    return NextResponse.json({ error: 'Authorization header missing' }, { status: 401 });
  }

 
  // Simulate a call to your backend
  const response = await fetch(`${ENDPOINTS.CHAT_ROOMS}/getUsers`,{
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json' ,
      'Authorization': authHeader, // Forward the Authorization header

    },
    
  });

  const data = await response.json();

  if (response.ok) {
    return NextResponse.json(data);
  } else {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}