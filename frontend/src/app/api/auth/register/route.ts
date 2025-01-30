// src/app/api/auth/register/route.ts
import { NextResponse } from 'next/server';
import { ENDPOINTS } from '@/constants/endpoints';

export async function POST(request: Request) {
  const { username,email, password } = await request.json();

  // Simulate a call to your backend
  const response = await fetch(ENDPOINTS.REGISTER, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username,email, password }),
  });

  const data = await response.json();

  if (response.ok) {
    return NextResponse.json(data);
  } else {
    return NextResponse.json({ error: 'Registration failed' }, { status: 400 });
  }
}