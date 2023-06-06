'use client';

import { cn } from '@/lib/utils';
// import { cva } from 'class-variance-authority';
import { Variants, motion } from 'framer-motion';
import Link from 'next/link';
import React, { ReactNode } from 'react';

export interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  type: 1 | 2;
  href?: string;
}

interface Theme {
  borderColor: string;
  title: string;
}

type ThemeColors = {
  [key in CardProps['type']]: Theme;
};

// const card = cva([])

const themeColors: ThemeColors = {
  1: {
    borderColor: 'border-yellow-primary',
    title: 'text-white',
  },
  2: {
    borderColor: 'border-blue-primary',
    title: 'text-blue-primary',
  },
};

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  type = 1,
  href = '',
}) => {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true }}
      className={cn(
        'h-60 w-full shrink-0 snap-start shadow-slate-950',
        'md:w-3/4',
        type === 2 &&
          cn(
            'group odd:-skew-x-3 even:skew-x-3',
            'md:odd:-skew-x-12 md:even:skew-x-12'
          )
      )}
    >
      <motion.div
        variants={cardAnimeVariants}
        className={cn(
          'w-full h-full shadow-sm relative',
          'border rounded-lg',
          themeColors[type].borderColor,
          type === 2 &&
            cn(
              'rounded-none bg-old-paper',
              'group-first-of-type:rounded-t-lg group-last-of-type:rounded-b-lg'
            )
        )}
      >
        <Link
          href={href}
          className={cn(
            'absolute inset-0 w-full h-full p-6 ',
            `${
              href
                ? 'cursor-pointer pointer-events-auto'
                : 'cursor-default pointer-events-none'
            }`,
            type === 2 &&
              cn(
                'group-odd:skew-x-3 group-even:-skew-x-3 group-odd:pl-4 group-odd:pr-2 group-even:pl-2 group-even:pr-4',
                'md:group-odd:skew-x-12 md:group-even:-skew-x-12 md:group-odd:pl-12 md:group-odd:pr-8 md:group-even:pl-8 md:group-even:pr-12'
              )
          )}
        >
          <div
            className={cn(
              'flex flex-col items-center justify-start mb-2 md:flex-row md:mb-8 overflow-hidden'
            )}
          >
            {icon && (
              <div className='px-2 py-2 mb-4 mr-0 border rounded-lg h-14 border-yellow-primary md:mr-4 md:mb-0'>
                {icon}
              </div>
            )}
            <h3
              className={cn(
                'text-2xl sm:text-3xl font-bold',
                themeColors[type].title
              )}
            >
              {title}
            </h3>
          </div>
          <p
            className={cn(
              'text-base line-clamp-3 md:line-clamp-4',
              type === 2 && 'text-lg md:text-2xl text-blue-primary'
            )}
          >
            {description}
          </p>
        </Link>
      </motion.div>
    </motion.div>
  );
};

const cardAnimeVariants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0, 0.71, 0.2, 1.01],
    },
    className: 'border-yellow-primary',
  },
};
