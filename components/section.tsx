import { cn } from '@/lib/utils';

interface Props {
  title: string;
  type: 1 | 2;
  className?: string;
  [key: string]: any;
}

interface Theme {
  bg: string;
  title: string;
}

type ThemeColors = {
  [key in Props['type']]: Theme;
};

const themeColors: ThemeColors = {
  1: {
    bg: 'bg-primary',
    title: 'text-yellow-primary',
  },
  2: {
    bg: 'bg-blue-primary',
    title: 'text-yellow-primary',
  },
};

export const Section: React.FC<Props> = ({
  title,
  type,
  className,
  children,
  ...props
}) => {
  return (
    <section
      className={cn(
        `text-left min-h-[50vh] w-full ${themeColors[type].bg}`,
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'container relative px-4 py-16 mx-auto max-w-7xl',
          'md:px-8 md:flex md:flex-col md:items-center'
        )}
      >
        <h2
          className={cn(
            `font-canela font-bold text-2xl mb-8 relative`,
            'md:text-4xl',
            `${themeColors[type].title}`
          )}
        >
          {title}
        </h2>
        <div
          className={cn(
            'w-full flex items-center justify-between px-6 py-2 gap-2 overflow-x-auto overflow-y-hidden text-white-ish ',
            'md:flex-col md:gap-8 md:items-center ',
            type === 1 && 'flex-nowrap snap-x snap-proximity',
            type === 2 &&
              'flex-col gap-0 md:gap-0 border-collapse border-spacing-0 overflow-hidden'
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
};
