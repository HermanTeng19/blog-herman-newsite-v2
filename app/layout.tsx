import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Herman Teng - Tech Blog & Portfolio',
  description: 'Front-end Architect & Tech Blogger - Building the future of web experiences',
  keywords: ['Herman Teng', 'tech blog', 'frontend', 'web development', 'portfolio'],
  authors: [{ name: 'Herman Teng' }],
  creator: 'Herman Teng',
  openGraph: {
    title: 'Herman Teng - Tech Blog & Portfolio',
    description: 'Front-end Architect & Tech Blogger - Building the future of web experiences',
    url: 'https://hermanteng.dev',
    siteName: 'Herman Teng Blog',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Herman Teng - Tech Blog & Portfolio',
    description: 'Front-end Architect & Tech Blogger - Building the future of web experiences',
    creator: '@hermanteng',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen">{children}</body>
    </html>
  );
} 