import localFont from 'next/font/local';

export const canela = localFont({
  variable: '--font-canela',
  src: [
    {
      path: './canela_light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './canela_medium.otf',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const tt_commons = localFont({
  variable: '--font-tt-commons',
  src: [
    {
      path: './tt_commons_bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './tt_commons_regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
});
