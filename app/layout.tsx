import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Assessment',
  description: 'My Assessment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className=''>
          <Navbar />
          <div className='pt-20 md:pt-16'>{children}</div>
        </main>
      </body>
    </html>
  );
}
