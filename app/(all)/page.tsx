import { Frontend } from '@/components/frontend';
import { Profile } from '@/components/profile';
import { Section } from '@/components/section';
import { Principles } from '@/components/principles';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <>
      <Profile />
      <Frontend />
      <Principles />
      <Section title='Currently Learning' type={1}>
        <div className={cn('flex flex-wrap gap-4')}>
          <div className='px-4 py-2 text-lg border-2 border-brass'>
            Deep Learning
          </div>
          <div className='px-4 py-2 text-lg border-2 border-brass'>Rust</div>
          <div className='px-4 py-2 text-lg border-2 border-brass'>Web3</div>
        </div>
      </Section>
    </>
  );
}
