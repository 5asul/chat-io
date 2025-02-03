// src/app/api/chat-rooms/[id]/route.ts
import { NextResponse,NextRequest } from 'next/server';
import { ENDPOINTS } from '@/constants/endpoints';

export async function GET(
  request: NextRequest,
  {params}: { params: Promise<{ id: string }> } // Correct type for context
):Promise<NextResponse> {
  const { id } = await params; // Destructure params directly (no `await`)
  const authHeader = request.headers.get('Authorization');

  if (!authHeader) {
    return NextResponse.json({ error: 'Authorization header missing' }, { status: 401 });
  }

  try {
    const response = await fetch(`${ENDPOINTS.CHAT_ROOMS}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch chat room: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching chat room:', error);
    return NextResponse.json({ error: 'Chat room not found' }, { status: 404 });
  }
}