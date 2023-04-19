import { cn } from '@/lib/utils';

interface Props {
  title: string;
  type: 1 | 2;
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
    title: 'text-brass',
  },
};

export const Section: React.FC<Props> = ({
  title,
  type,
  children,
  ...props
}) => {
  return (
    <section
      className={cn(
        `text-left min-h-[50vh] full-width ${themeColors[type].bg}`,
        'md:h-full'
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
            'flex items-center justify-between gap-2 px-6 py-2 overflow-auto text-white-ish flex-nowrap snap-x snap-proximity',
            'md:gap-4 md:flex-col md:items-center',
            'lg:gap-8',
            type === 2 && 'flex-col'
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
};
