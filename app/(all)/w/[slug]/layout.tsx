import { cn } from '@/lib/utils';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article
      className={cn(
        'mx-auto',
        'py-12 prose prose-lg prose-teal prose-h1:font-canela prose-h1:text-3xl',
        'md:prose-xl xl:prose-2xl md:prose-h1:text-4xl lg:prose-h1:text-5xl',
        'prose-pre:max-w-[90vw] code-block'
      )}
    >
      {children}
    </article>
  );
}
