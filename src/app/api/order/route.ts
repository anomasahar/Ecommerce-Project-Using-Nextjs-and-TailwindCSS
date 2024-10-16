import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';
import { v4 as uuidv4 } from 'uuid';

interface CartItem {
  title: string;
  price: number;
  quantity: number;
}

export async function POST(req: Request) {
  try {
    const body = await req.json(); 
    const { userDetails, cartItems, totalPrice } = body;

    if (!userDetails || !cartItems || !totalPrice) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const uniqueOrderTitle = `Order-${Math.random().toString(36).substring(2, 10)}`;

    const newOrder = {
      _type: 'order',
      title: uniqueOrderTitle,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.email,
      address: userDetails.address,
      city: userDetails.city,
      state: userDetails.state,
      zipCode: userDetails.zipCode,
      phone: userDetails.phone,
      paymentMethod: userDetails.paymentMethod || 'Cash On Delivery',
      items: cartItems.map((item: CartItem) => ({
        _type: 'cartItem',
        _key: uuidv4(),
        title: item.title,
        price:item.price,
        quantity: item.quantity,
      })),
      totalPrice,
    };

    await client.create(newOrder);

    return NextResponse.json({ message: 'Order created successfully' }, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error creating order:', errorMessage);
    return NextResponse.json({ message: 'Error creating order', error: errorMessage }, { status: 500 });
  }
}
