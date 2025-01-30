// src/app/api/auth/login/route.ts
import { NextResponse } from 'next/server';
import { ENDPOINTS } from '@/constants/endpoints';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Simulate a call to your backend
  const response = await fetch(ENDPOINTS.LOGIN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();


  if (response.ok) {
    
    return NextResponse.json(data);
    
  } else {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
}