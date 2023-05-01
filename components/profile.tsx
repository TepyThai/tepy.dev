import { cn } from '@/lib/utils';
import { Arrow } from './icon/Arrow';
import Image from 'next/image';
import profilePic from '@/public/profile.webp';

export const Profile = () => {
  return (
    <section
      className={cn(
        'h-[50dvh] md:h-[65dvh] mb-10 md:mb-20 max-w-5xl md:px-4 lg:px-8 py-4 md:py-6 lg:py-8 items-center justify-center flex flex-col md:flex-row md:justify-evenly mx-auto'
      )}
    >
      <div className='flex flex-col items-center justify-center h-full mb-8 gap-y-4'>
        <h1 className='leading-loose tracking-wide'>
          Hi, I&apos;m
          <span className='text-5xl font-bold text-teal-primary font-canela'>
            Tepy
          </span>
        </h1>
        <div className='relative inline-block w-[260px]'>
          <span
            id='frontendText'
            className={cn('absolute left-0 text-2xl font-bold text-gradient')}
          >
            Frontend
          </span>
          <span className='absolute left-[106px] top-2 transform -translate-y-1/2'>
            <span className='relative'>
              <span className='absolute w-full text-xs -top-2'>
                in progress
              </span>
              <span className='absolute -top-[2px] left-4'>
                <Arrow />
              </span>
            </span>
          </span>
          <span className='absolute text-2xl font-bold text-gradient left-40 animate-slide-up'>
            Expert
          </span>
        </div>
      </div>
      <span className='animate-fade-in'>
        <Image
          src={profilePic}
          alt='Picture of Tepy Thai'
          className={cn(
            'object-cover w-56 h-56 mx-auto my-4 rounded-full',
            'md:w-64 md:h-64'
          )}
          placeholder='blur'
        />
      </span>
    </section>
  );
};
