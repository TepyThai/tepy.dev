'use client';

import { HTMLMotionProps, motion } from 'framer-motion';
import { MenuItem } from './menu-item';
import { cn } from '@/lib/utils';
import { AtomIcon, BinaryIcon, PencilIcon } from 'lucide-react';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

interface Props extends HTMLMotionProps<'ul'> {
  isOpen: boolean;
}

export const Navigation = ({ isOpen, ...props }: Props) => (
  <motion.ul
    variants={variants}
    className={cn(
      'w-full h-full mx-auto px-20 py-32 absolute inset-0',
      isOpen && 'z-10',
      'md:flex md:px-0 md:py-0 md:gap-x-4 md:items-baseline md:justify-end md:static'
    )}
    {...props}
  >
    {itemIds.map(({ title, icon }) => (
      <MenuItem key={title} icon={icon}>
        {title}
      </MenuItem>
    ))}
  </motion.ul>
);

export const itemIds = [
  {
    title: 'Writings',
    icon: <PencilIcon />,
  },
  { title: 'Principles', icon: <AtomIcon /> },
  { title: 'Projects', icon: <BinaryIcon /> },
];
