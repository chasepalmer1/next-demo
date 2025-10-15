import { NextResponse } from 'next/server';

    export async function GET(request: Request) {
      // Fetch data from a database or external API
      const products = [{ id: 1, name: 'Product1' }, { id: 2, name: 'Product2' }];
      return NextResponse.json(products);
    }

    export async function POST(request: Request) {
      const data = await request.json();
      // Save to database
      return NextResponse.json({ message: 'Product created', data });
    }