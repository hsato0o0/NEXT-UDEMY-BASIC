'use client';
import { useState } from 'react';

export default function ClientComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      クライアント
      <button
        style={{ display: 'block' }}
        onClick={() => setCount((prev) => ++prev)}
      >
        追加
      </button>
      {count}
    </div>
  );
}
