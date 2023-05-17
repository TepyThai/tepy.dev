import { Frontend } from '@/components/frontend';
import { Profile } from '@/components/profile';
import { Principles } from '@/components/principles';
import { Learning } from '@/components/learning';

export default function Home() {
  return (
    <>
      <Profile />
      <Frontend />
      <Principles />
      <Learning />
    </>
  );
}
