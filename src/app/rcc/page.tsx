'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ClientComponent() {
  const [count, setCount] = useState(0);

  const router = useRouter();
  return (
    <div>
      <button onClick={() => setCount((prev) => ++prev)}>追加</button>
      {count}
      <Link href="/about">About</Link>
      <button onClick={() => router.push('/about')}>About</button>
    </div>
  );
}
