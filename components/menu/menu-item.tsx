import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export interface NavMenuItemProps {
  icon: ReactNode;
  href: string;
  text: string;
}

export const NavMenuItem = ({ icon, href, text }: NavMenuItemProps) => {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link href={href}>
      <motion.li
        variants={variants}
        className={cn(
          'list-none mb-8 cursor-pointer text-white flex items-center justify-start gap-x-4 py-2 text-2xl',
          'md:inline md:mb-0 md:py-0 md:text-primary',
          'md:hover:text-teal-primary',
          active && 'text-yellow-primary md:text-teal-primary'
        )}
      >
        <span className={cn('md:hidden')}> {icon}</span>
        {text}
      </motion.li>
    </Link>
  );
};
