import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 