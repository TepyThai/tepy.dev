import { cn } from '@/lib/utils';
import '../../styles/globals.css';
import { tt_commons, canela } from '../fonts';

export { metadata } from '../(all)/layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={cn(`${tt_commons.variable} ${canela.variable}`)}>
      <body
        className={cn(
          'text-xl max-w-screen-xl mx-auto overflow-x-hidden',
          'text-white'
        )}
      >
        <main className={cn('container mx-auto px-4')}>{children}</main>
      </body>
    </html>
  );
}
