import { Header } from '@/components/header';
import '../../styles/globals.css';
import { cn } from '@/lib/utils';
import { canela, tt_commons } from '../fonts';

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
          'text-xl max-w-screen-xl mx-auto text-primary overflow-x-hidden'
        )}
      >
        <Header />
        <main className={cn('container mx-auto px-4')}>{children}</main>
      </body>
    </html>
  );
}