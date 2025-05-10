import Image from 'next/image';

export default async function SSGPage() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random', {
    cache: 'force-cache',
  });
  const resJson = await res.json();
  const image = resJson.message;

  const timestamp = new Date().toISOString();

  return (
    <div>
      SSGPage ページ固定： {timestamp}
      <Image src={image} alt="" width={400} height={400} />
    </div>
  );
}
