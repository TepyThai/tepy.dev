import { cn } from '@/lib/utils';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer
      className={cn(
        'bg-primary text-white-ish',
        'border-t border-yellow-primary'
      )}
    >
      <div
        className={cn(
          'flex items-start justify-between w-full h-max px-4 py-12',
          'container mx-auto'
        )}
      >
        <span>@ {new Date().getFullYear()}</span>
        <ul className={cn('md:flex gap-2')}>
          <Link href={'/'}>
            <li>Home</li>
          </Link>
          <Link href={'/w'}>
            <li>Writing</li>
          </Link>
          <Link href={'/p'}>
            <li>Principle</li>
          </Link>
          <Link href={'/l'}>
            <li>Learning</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
};
