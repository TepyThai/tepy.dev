import { Card } from '@/components/card';
import { getPostMetaFromPath } from '@/lib/getSlugs';

export const dynamic = 'force-static';

export default function Principle() {
  const posts = getPostMetaFromPath('./(p)');

  return (
    <div>
      <ul>
        {posts.map((title) => (
          <li key={title}>
            <Card title={title} description='' type={2} href={`/w/${title}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}
