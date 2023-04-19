import { motion } from 'framer-motion';
import { itemIds } from './navigation';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

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

export const MenuItem = ({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'list-none mb-8 cursor-pointer text-yellow-primary flex items-center justify-start gap-x-4 py-2 text-2xl',
        'md:inline md:mb-0 md:py-0 md:text-primary'
      )}
    >
      <span className={cn('md:hidden')}> {icon}</span>
      {children}
    </motion.li>
  );
};
