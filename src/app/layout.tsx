// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { Providers } from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const satoshi = localFont({
  src: '../../public/fonts/Satoshi-Variable.woff2',
  variable: '--font-satoshi',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zain Khalid - Digital Architect',
  description: 'Building high-performance, secure, and scalable digital experiences from foundation to finish.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${satoshi.variable}`}>
      <Head>
        <link
          rel="preload"
          href="/hero-background.jpg"
          as="image"
        />
      </Head>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}