import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';

export const MenuToggle = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => (
  <button
    onClick={toggle}
    className={cn(
      'inline-flex w-12 h-12 border border-solid rounded-full items-center justify-center text-yellow-primary',
      isOpen ? 'border-yellow-primary' : 'border-transparent',
      isOpen && 'z-10',
      'md:hidden'
    )}
  >
    <motion.span
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}
      variants={motions}
    >
      <MenuIcon />
    </motion.span>
    <motion.span
      initial='open'
      animate={isOpen ? 'closed' : 'open'}
      variants={motions}
    >
      <XIcon />
    </motion.span>
  </button>
);

const motions = {
  closed: { opacity: 1, display: 'inline', transition: { duration: 0.5 } },
  open: { opacity: 0, display: 'none', transition: { duration: 0.1 } },
};
