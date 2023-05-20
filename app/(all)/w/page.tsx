import { getPostMetaFromPath } from '@/lib/getSlugs';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default async function Writing() {
  const posts = await getPostMetaFromPath('writing', 100);

  return (
    <div>
      <ul className={cn('flex flex-col gap-4')}>
        {posts.map(({ slug, excerpt, title }) => (
          <Link href={`/w/${slug}`} key={slug}>
            <li>
              <h2
                className={cn(
                  'text-2xl',
                  'first-letter:text-primary first-letter:text-5xl'
                )}
              >
                {title}
              </h2>
              <small
                className={cn(
                  'child-inline text-gray-600 block max-w-[60ch] pl-4'
                )}
              >
                {excerpt} <span>...</span>
              </small>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getPostMetaFromPath('writing', 100);

  return posts.map((post) => ({
    slug: post,
  }));
}
