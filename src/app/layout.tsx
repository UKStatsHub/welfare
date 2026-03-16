import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

// In some environments (e.g., code editors without Node types installed) the `process` global
// may not be recognized by TypeScript. Ensure the file still compiles.
declare const process: { env: { NEXT_PUBLIC_BASE_PATH?: string } };

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#003087',
};

export const metadata: Metadata = {
  title: 'UK Welfare Statistics | UK Statistics Hub',
  description: 'Comprehensive UK welfare statistics compiled from official government sources. Universal Credit, PIP, asylum support, poverty, homelessness, and more. Data updated daily.',
  keywords: [
    'UK welfare statistics',
    'Universal Credit',
    'PIP',
    'Disability benefits',
    'Asylum support',
    'Poverty statistics',
    'Homelessness',
    'Government statistics',
    'DWP',
    'UK benefits',
  ],
  authors: [{ name: 'UK Statistics Hub' }],
  creator: 'UK Statistics Hub',
  publisher: 'UK Statistics Hub',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://ukstatshub.github.io/welfare/',
    title: 'UK Welfare Statistics | UK Statistics Hub',
    description: 'Comprehensive UK welfare statistics compiled from official government sources. Data updated daily.',
    siteName: 'UK Welfare Statistics',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Welfare Statistics | UK Statistics Hub',
    description: 'Comprehensive UK welfare statistics compiled from official government sources.',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href={`${basePath}/favicon.ico`} sizes="any" />
        <link rel="apple-touch-icon" href={`${basePath}/apple-touch-icon.png`} />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gov-grey-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
