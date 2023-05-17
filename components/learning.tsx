import { cn } from '@/lib/utils';
import { Section } from './section';

export const Learning = () => {
  return (
    <Section title='Currently Learning' type={1}>
      <div className={cn('flex flex-wrap gap-4')}>
        <div className='px-4 py-2 text-lg border-2 border-brass'>
          Deep Learning
        </div>
        <div className='px-4 py-2 text-lg border-2 border-brass'>Rust</div>
        <div className='px-4 py-2 text-lg border-2 border-brass'>Web3</div>
      </div>
    </Section>
  );
};
