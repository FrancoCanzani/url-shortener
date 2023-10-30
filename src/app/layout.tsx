import type { Metadata } from 'next';
import { GeistSans } from 'geist/font';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full scroll-smooth bg-gray-50 antialiased'>
      <body className={`${GeistSans.className} flex h-full flex-col`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
