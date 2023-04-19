import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

export interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  type: 1 | 2;
}

interface Theme {
  borderColor: string;
  title: string;
}

type ThemeColors = {
  [key in CardProps['type']]: Theme;
};

const themeColors: ThemeColors = {
  1: {
    borderColor: 'border-yellow-primary',
    title: 'text-white',
  },
  2: {
    borderColor: 'border-brass',
    title: 'text-yellow-primary',
  },
};

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  type = 1,
}) => {
  return (
    <div
      className={cn(
        'w-full p-6 border rounded-sm shadow-lg shrink-0 snap-center',
        'md:w-2/3 ',
        themeColors[type].borderColor
      )}
    >
      <div className='flex flex-col items-center justify-start mb-2 md:flex-row md:mb-8'>
        {icon && (
          <div className='px-2 py-2 mb-4 mr-0 border rounded-lg w-max h-max border-yellow-primary md:mr-4 md:mb-0'>
            {icon}
          </div>
        )}
        <h3 className={cn('text-3xl font-bold', themeColors[type].title)}>
          {title}
        </h3>
      </div>
      <p className='text-base line-clamp-2 md:line-clamp-3'>{description}</p>
    </div>
  );
};
