import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './_styles/globals.css';

import Nav from './_components/nav';
import Footer from './_components/footer';

const openSans =  Open_Sans({subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Business site',
  description: 'Your business site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={openSans.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
