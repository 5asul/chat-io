// src/app/api/messages/[id]/route.ts
import { NextResponse } from 'next/server';
import { ENDPOINTS } from '@/constants/endpoints';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> })
:Promise<NextResponse> {
  const { id } = await params;

  // Simulate a call to your backend
  const response = await fetch(`${ENDPOINTS.MESSAGES}/${id}`);

  const data = await response.json();

  if (response.ok) {
    return NextResponse.json(data);
  } else {
    return NextResponse.json({ error: 'Messages not found' }, { status: 404 });
  }
}