import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ReactNode } from 'react';

export const PostCard = ({
  slug,
  excerpt,
  title,
}: {
  slug: string;
  excerpt: ReactNode;
  title: string;
}) => {
  return (
    <Link
      href={`/w/${slug}`}
      key={slug}
      className={cn(
        ' px-4 py-2',
        'border border-transparent transition-colors duration-200 ease-in-out',
        'hover:border-primary'
      )}
    >
      <li>
        <h2
          className={cn(
            'text-2xl',
            'first-letter:text-primary first-letter:text-5xl first-letter:font-canela'
          )}
        >
          {title}
        </h2>
        <small
          className={cn('child-inline text-gray-600 block max-w-[60ch] pl-4')}
        >
          {excerpt} <span>...</span>
        </small>
      </li>
    </Link>
  );
};
