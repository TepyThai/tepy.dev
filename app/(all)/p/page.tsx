import { getPostSlugsFromPath } from '@/app/server-utils';
import { Card } from '@/components/card';

export default function Principle() {
  const posts = getPostSlugsFromPath('./(p)');

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
