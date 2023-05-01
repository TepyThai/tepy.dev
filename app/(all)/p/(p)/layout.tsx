import { cn } from '@/lib/utils';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className={cn('py-12 prose prose-xl lg:prose-2xl prose-pink')}>
      {children}
    </article>
  );
}
