import { cn } from '@/lib/utils';

export default function Project() {
  return (
    <div>
      <h1
        className={cn(
          'text-center text-2xl font-canela text-gradient',
          'md:text-4xl'
        )}
      >
        Some Of My Works
      </h1>
      <div>
        <h2>Personal</h2>
        <ul>
          <li>Teatui</li>
        </ul>
      </div>
    </div>
  );
}
