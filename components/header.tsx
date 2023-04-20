'use client';

import { cn } from '@/lib/utils';
import { Menu } from './menu';
import { MenuToggle } from './menu/menu-toggle';
import { useCycle } from 'framer-motion';
import { Navigation } from './menu/navigation';
import Link from 'next/link';

export const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div>
      <header
        className={cn(
          'mx-auto flex items-center justify-between p-4',
          isOpen && 'z-20 sticky top-0',
          'md:flex-row md:container'
        )}
      >
        <div className={cn('flex items-center')}>
          <Link
            href='/'
            className={cn(
              `font-canela text-2xl md:text-4xl font-light text-primary relative`,
              isOpen ? 'text-yellow-primary' : 'text-current'
            )}
          >
            <span className={cn('text-4xl md:text-5xl tracking-[-0.6rem]')}>
              T
            </span>
            <span className={cn('tracking-wider')}>e</span>
            <span
              className={cn(
                'text-xl md:text-2xl -top-1 absolute text-teal-primary',
                isOpen ? 'text-yellow-primary' : 'text-current'
              )}
            >
              2
            </span>
          </Link>
        </div>
        <Navigation className={cn('hidden', 'md:flex')} isOpen={isOpen} />
        <MenuToggle isOpen={isOpen} toggle={() => toggleOpen()} />
      </header>
      <Menu isOpen={isOpen} />
    </div>
  );
};
