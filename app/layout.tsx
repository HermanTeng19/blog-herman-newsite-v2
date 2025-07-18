import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Herman Teng - Senior Data Engineer & Gen AI Advocate',
  description: 'Senior Data Engineer and passionate Gen AI advocate with 10+ years of experience architecting scalable data solutions and AI-powered applications. Specializing in Microsoft Azure data services, machine learning pipelines, and building intelligent systems.',
  keywords: [
    'Herman Teng',
    'Senior Data Engineer',
    'Gen AI Advocate',
    'Microsoft Azure',
    'Data Engineering',
    'Machine Learning',
    'AI Solutions',
    'Azure Data Factory',
    'Databricks',
    'Data Architecture',
    'Tech Blog',
    'Data Science',
    'Artificial Intelligence',
    'Big Data',
    'Cloud Computing'
  ],
  authors: [{ name: 'Herman Teng' }],
  creator: 'Herman Teng',
  publisher: 'Herman Teng',
  robots: 'index, follow',
  openGraph: {
    title: 'Herman Teng - Senior Data Engineer & Gen AI Advocate',
    description: 'Senior Data Engineer and passionate Gen AI advocate with 10+ years of experience architecting scalable data solutions and AI-powered applications. Specializing in Microsoft Azure data services, machine learning pipelines, and building intelligent systems.',
    url: 'https://hermanteng.dev',
    siteName: 'Herman Teng - Data Engineering & AI Blog',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/herman-profile.png',
        width: 1200,
        height: 630,
        alt: 'Herman Teng - Senior Data Engineer & Gen AI Advocate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Herman Teng - Senior Data Engineer & Gen AI Advocate',
    description: 'Senior Data Engineer and passionate Gen AI advocate with 10+ years of experience architecting scalable data solutions and AI-powered applications.',
    creator: '@hermanteng',
    images: ['/images/herman-profile.png'],
  },
  alternates: {
    canonical: 'https://hermanteng.dev',
  },
  category: 'technology',
  classification: 'Data Engineering, AI, Machine Learning, Cloud Computing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Herman Teng" />
        <link rel="apple-touch-icon" href="/images/herman-profile.png" />
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 