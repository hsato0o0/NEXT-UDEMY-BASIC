import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    { id: 1, name: '佐藤' },
    { id: 2, name: '鈴木' },
    { id: 3, name: '田中' },
  ]);
}
