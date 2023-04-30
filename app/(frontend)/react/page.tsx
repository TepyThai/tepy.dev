import { Header } from '@/components/header';
import { cn } from '@/lib/utils';

export default function Page() {
  return (
    <div
      className={cn(
        'min-h-[100vh] bg-red-400',
        'full-width bg-gradient-to-tr from-teal-primary to-yellow-primary'
      )}
    >
      <Header />
      <div className={cn('container mx-auto px-4')}>
        <h1 className={cn()}>React</h1>
      </div>
    </div>
  );
}
