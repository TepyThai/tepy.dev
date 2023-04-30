import { HTMLMotionProps, motion } from 'framer-motion';
import { NavMenuItem, NavMenuItemProps } from './menu-item';
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
  onNavItemClick: NavMenuItemProps['onClick'];
}

export const Navigation = ({
  isOpen,
  className,
  onNavItemClick,
  ...props
}: Props) => (
  <motion.ul
    variants={variants}
    className={cn(
      'w-full h-full mx-auto px-20 py-32 absolute inset-0',
      isOpen && 'z-10',
      'md:flex md:px-0 md:py-0 md:gap-x-4 md:items-baseline md:justify-end md:static',
      className
    )}
    {...props}
  >
    {itemIds.map(({ text, icon, href }) => (
      <NavMenuItem
        onClick={onNavItemClick}
        key={text}
        icon={icon}
        href={href}
        text={text}
      />
    ))}
  </motion.ul>
);

export const itemIds: Omit<NavMenuItemProps, 'onClick'>[] = [
  {
    text: 'Writing',
    icon: <PencilIcon />,
    href: '/w',
  },
  { text: 'Principle', icon: <AtomIcon />, href: '/p' },
  { text: 'Project', icon: <BinaryIcon />, href: '/pj' },
];
