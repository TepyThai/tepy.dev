import { Header } from '@/components/header';
import '../../styles/globals.css';
import { cn } from '@/lib/utils';
import { canela, tt_commons } from '../fonts';
import { Footer } from '@/components/footer';
import Head from 'next/head';

export const metadata = {
  title: 'Tepy Thai',
  description: "Tepy Thai's Personal Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={cn(`${tt_commons.variable} ${canela.variable}`)}>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css'
        ></link>
      </Head>
      <body
        className={cn(
          'grid grid-rows-[auto,1fr,auto] min-h-screen',
          'text-xl text-primary'
        )}
      >
        <Header />
        <main className={cn('w-full h-full')}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
