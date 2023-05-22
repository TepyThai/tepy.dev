import { PostCard } from '@/components/post-card';
import { getPostMetaFromPath } from '@/lib/getSlugs';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default async function Writing() {
  const posts = await getPostMetaFromPath('writing', 100);

  return (
    <div className={cn('my-2', 'md:my-8')}>
      <ul className={cn('flex flex-col gap-4')}>
        {posts.map(({ slug, excerpt, title }) => (
          <PostCard slug={slug} excerpt={excerpt} title={title} key={slug} />
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
