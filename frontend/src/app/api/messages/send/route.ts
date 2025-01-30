// src/app/api/messages/send/route.ts
import { NextResponse } from 'next/server';
import { ENDPOINTS } from '@/constants/endpoints';

export async function POST(request: Request) {
  const { roomId, message } = await request.json();

  // Simulate a call to your backend
  const response = await fetch(ENDPOINTS.MESSAGES, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ roomId, message }),
  });

  const data = await response.json();

  if (response.ok) {
    return NextResponse.json(data);
  } else {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 400 });
  }
}