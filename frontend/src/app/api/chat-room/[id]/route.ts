// src/app/api/chat-rooms/[id]/route.ts
import { NextResponse } from 'next/server';
import { ENDPOINTS } from '@/constants/endpoints';

export async function GET({ params }: { params: { id: string } }) {
  const { id } = params;

  // Simulate a call to your backend
  const response = await fetch(`${ENDPOINTS.CHAT_ROOMS}/${id}`);

  const data = await response.json();

  if (response.ok) {
    return NextResponse.json(data);
  } else {
    return NextResponse.json({ error: 'Chat room not found' }, { status: 404 });
  }
}