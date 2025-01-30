// src/app/api/messages/[id]/route.ts
import { NextResponse } from 'next/server';
import { ENDPOINTS } from '@/constants/endpoints';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  // Simulate a call to your backend
  const response = await fetch(`${ENDPOINTS.MESSAGES}/${id}`);

  const data = await response.json();

  if (response.ok) {
    return NextResponse.json(data);
  } else {
    return NextResponse.json({ error: 'Messages not found' }, { status: 404 });
  }
}