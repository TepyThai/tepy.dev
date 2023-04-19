'use client';

import { useRef, useState } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '@/hooks/use-dimensions';
import { cn } from '@/lib/utils';
import { Navigation } from './navigation';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
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

export const Menu = ({ isOpen }: { isOpen: boolean }) => {
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
    >
      <motion.div
        className={cn(
          'absolute top-0 left-0 bottom-0 w-full bg-teal-primary text-yellow-primary'
        )}
        variants={sidebar}
      ></motion.div>
      <Navigation isOpen={isOpen} />
    </motion.nav>
  );
};
