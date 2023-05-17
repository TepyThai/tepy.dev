import { getPostMetaFromPath } from '@/lib/getSlugs';
import { cn } from '@/lib/utils';

export default async function Principle() {
  // const posts = getPostMetaFromPath('writing');

  return (
    <div>
      <ul>
        {/* {posts.map((title: any) => (
          <li key={title}>
            <h2 className={cn('first-letter:text-xl')}>{title}</h2>
          </li>
        ))} */}
        hi
      </ul>
    </div>
  );
}

// export async function generateStaticParams() {
// const posts = getPostMetaFromPath('writing');
// return posts.map((post) => ({
//   slug: post,
// }));
// }
