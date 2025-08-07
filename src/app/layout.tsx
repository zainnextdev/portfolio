import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { Providers } from './providers';
import Header from '@/components/Header'; // Import Header
import Footer from '@/components/Footer'; // Import Footer

// Font Configuration remains the same
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

// Metadata remains a server-side export
export const metadata: Metadata = {
  title: 'Zain Khalid - The Digital Architect',
  description: 'Architecting high-performance, secure, and scalable digital experiences from foundation to finish.',
};

// The RootLayout is now a clean Server Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${satoshi.variable}`}>
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