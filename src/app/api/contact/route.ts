import { NextResponse } from 'next/server';
import { contactClient } from '@/sanity/lib/client';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const newMessage = {
      _type: 'message',
      title: email,
      name,
      email,
      message,
    };

    await contactClient.create(newMessage);

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error sending message:', errorMessage);
    return NextResponse.json({ message: 'Error sending message', error: errorMessage }, { status: 500 });
  }
}
