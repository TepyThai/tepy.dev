import { PostCard } from '@/components/post-card';
import { getPostMetaFromPath } from '@/lib/getSlugs';
import { cn } from '@/lib/utils';
import ideas from '@/public/ideas.jpeg';
import Image from 'next/image';

export default async function Writing() {
  const posts = await getPostMetaFromPath('writing', 100);

  return (
    <div className={cn('my-2 container max-w-4xl mx-auto', 'md:my-8')}>
      <div
        className={cn(
          'animate-fade-in mt-4 mb-8',
          'relative whitespace-pre font-bold flex items-center justify-center'
        )}
      >
        <span>
          <Image
            src={ideas}
            alt='Picture of idea icon'
            className={cn(
              'object-cover w-16 h-16 mx-auto my-4 rounded-full',
              ' float-left shape-outside mr-4'
            )}
            placeholder='blur'
          />
          <h1 className='inline-block text-gradient'>
            Ideas <br /> &nbsp;Worth <br /> Spreading
          </h1>
        </span>
      </div>
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
