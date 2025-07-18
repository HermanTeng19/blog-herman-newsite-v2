import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

// Get environment variables with fallbacks
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blog.hermanteng.net';
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Herman Teng - Data Engineering & AI Blog';
const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Senior Data Engineer and passionate Gen AI advocate with 10+ years of experience architecting scalable data solutions and AI-powered applications. Specializing in Microsoft Azure data services, machine learning pipelines, and building intelligent systems.';
const authorName = process.env.NEXT_PUBLIC_AUTHOR_NAME || 'Herman Teng';
const authorTitle = process.env.NEXT_PUBLIC_AUTHOR_TITLE || 'Senior Data Engineer & Gen AI Advocate';
const authorTwitter = process.env.NEXT_PUBLIC_AUTHOR_TWITTER || '@hermanteng';
const themeColor = process.env.NEXT_PUBLIC_THEME_COLOR || '#3b82f6';
const openGraphType = (process.env.NEXT_PUBLIC_OPENGRAPH_TYPE as 'website' | 'article' | 'profile') || 'website';
const twitterCardType = (process.env.NEXT_PUBLIC_TWITTER_CARD_TYPE as 'summary_large_image' | 'summary' | 'player' | 'app') || 'summary_large_image';

export const metadata: Metadata = {
  title: `${authorName} - ${authorTitle}`,
  description: siteDescription,
  keywords: [
    authorName,
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
  authors: [{ name: authorName }],
  creator: authorName,
  publisher: authorName,
  robots: 'index, follow',
  openGraph: {
    title: `${authorName} - ${authorTitle}`,
    description: siteDescription,
    url: siteUrl,
    siteName: siteName,
    locale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'en_US',
    type: openGraphType,
    images: [
      {
        url: '/images/herman-profile.png',
        width: 1200,
        height: 630,
        alt: `${authorName} - ${authorTitle}`,
      },
    ],
  },
  twitter: {
    card: twitterCardType,
    title: `${authorName} - ${authorTitle}`,
    description: siteDescription,
    creator: authorTwitter,
    images: ['/images/herman-profile.png'],
  },
  alternates: {
    canonical: siteUrl,
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