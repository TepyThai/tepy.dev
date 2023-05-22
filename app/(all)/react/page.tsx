import { cn } from '@/lib/utils';

export default function Page() {
  return (
    <main>
      <section className='text-center'>
        <h1
          className={cn(
            'text-4xl first-letter:text-6xl first-letter:text-teal-primary',
            'md: text - 6xl md:first-letter:text-8xl',
            'font-canela'
          )}
        >
          <dfn>R</dfn>eact
        </h1>
        <small>
          The <dfn>R</dfn> in React stands for Reactivity?
        </small>
      </section>
    </main>
  );
}
