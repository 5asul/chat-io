// src/app/api/auth/register/route.ts
import { NextResponse } from 'next/server';
import { ENDPOINTS } from '@/constants/endpoints';

export async function POST(request: Request) {
  const { username,email, password } = await request.json();

  try {
     // Simulate a call to your backend
  const response = await fetch(ENDPOINTS.REGISTER, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username,email, password }),
  });

  if (!response.ok) {
    const errorData = await response.text(); // Handle non-JSON responses
    return NextResponse.json(
      { error: errorData || 'Login failed' },
      { status: response.status }
    );
  }

  const data = await response.json();
  return NextResponse.json(data);
    
  } catch (error) {
    console.error('Login API Route Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
 


}