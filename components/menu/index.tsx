import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useDimensions } from '@/hooks/use-dimensions';
import { cn } from '@/lib/utils';
import { Navigation } from './navigation';
import { NavMenuItemProps } from './menu-item';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      type: 'spring',
      stiffness: 75,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(24px at calc(100% - 40px) 40px)',
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 500,
      damping: 40,
    },
  },
};

export const Menu = ({
  isOpen,
  onNavItemClick,
}: {
  isOpen: boolean;
  onNavItemClick: NavMenuItemProps['onClick'];
}) => {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className={cn(
        'absolute top-0 right-0 w-full bottom-0',
        isOpen ? 'z-10' : '-z-10',
        'md:hidden'
      )}
      layout
    >
      <motion.div
        className={cn(
          'absolute top-0 left-0 bottom-0 w-full bg-teal-primary text-yellow-primary'
        )}
        variants={sidebar}
      ></motion.div>
      <Navigation onNavItemClick={onNavItemClick} isOpen={isOpen} />
    </motion.nav>
  );
};
