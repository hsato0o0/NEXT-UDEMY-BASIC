import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ブログ記事一覧',
  description: 'ブログ記事一覧が表示されます',
};

const articles = [
  { id: '1', title: 'title1' },
  { id: '2', title: 'title2' },
  { id: '3', title: 'title3' },
];

async function fetchFunctions() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  // throw new Error('Error発生');
  return articles;
}

export default async function BlogPage() {
  const articles = await fetchFunctions();
  return (
    <div>
      <ul>
        {articles.map((article) => {
          return <li key={article.id}>title: {article.title}</li>;
        })}
      </ul>
    </div>
  );
}
