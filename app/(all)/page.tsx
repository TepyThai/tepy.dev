import { Frontend } from '@/components/frontend';
import { Profile } from '@/components/profile';
import { Section } from '@/components/section';
import { Thoughts } from '@/components/thoughts';

export default function Home() {
  return (
    <>
      <Profile />
      <Frontend />
      <Thoughts />
      <Section title='Currently Learning' type={1}>
        <div className='px-4 py-2 text-lg border-2 border-brass'>
          Deep Learning
        </div>
      </Section>
    </>
  );
}
