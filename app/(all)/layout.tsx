import { Header } from '@/components/header';
import '../../styles/globals.css';
import { cn } from '@/lib/utils';
import { canela, tt_commons } from '../fonts';
import { Footer } from '@/components/footer';

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
