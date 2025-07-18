import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { Metadata } from 'next';
import Layout from '@/components/Layout';
import TechCarousel from '@/components/TechCarousel';
import { getLatestPost } from '@/lib/blog';
import { profileInfo, featuredProject } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Herman Teng - Senior Data Engineer & Gen AI Advocate | Home',
  description: 'Welcome to Herman Teng\'s personal website. Senior Data Engineer and Gen AI advocate with 10+ years of experience in Azure data services, machine learning pipelines, and AI-powered applications.',
  keywords: [
    'Herman Teng',
    'Senior Data Engineer',
    'Gen AI Advocate',
    'Azure Data Services',
    'Machine Learning',
    'AI Solutions',
    'Data Engineering',
    'Tech Blog',
    'Portfolio'
  ],
  openGraph: {
    title: 'Herman Teng - Senior Data Engineer & Gen AI Advocate | Home',
    description: 'Welcome to Herman Teng\'s personal website. Senior Data Engineer and Gen AI advocate with 10+ years of experience in Azure data services, machine learning pipelines, and AI-powered applications.',
    url: 'https://blog.hermanteng.net',
    type: 'website',
  },
  twitter: {
    title: 'Herman Teng - Senior Data Engineer & Gen AI Advocate | Home',
    description: 'Welcome to Herman Teng\'s personal website. Senior Data Engineer and Gen AI advocate with 10+ years of experience in Azure data services, machine learning pipelines, and AI-powered applications.',
  },
};

export default async function Home() {
  const latestPost = await getLatestPost();

  return (
    <Layout>
      <div className="bento-grid">
        {/* Profile Block */}
        <div className="bento-item-1 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 flex flex-col justify-start border border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <Image
              src={profileInfo.profileImage}
              alt={profileInfo.name}
              width={96}
              height={96}
              className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">{profileInfo.name}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-medium mb-2">{profileInfo.title}</p>
            <p className="text-base text-gray-500 dark:text-gray-400">{profileInfo.subtitle}</p>
          </div>
        </div>

        {/* Featured Project Block */}
        <div className="bento-item-2 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 flex flex-col border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Featured Project</h3>
          <Link href="/portfolio" className="block">
            <Image
              src={featuredProject.image}
              alt={featuredProject.title}
              width={600}
              height={240}
              className="w-full h-32 object-cover rounded-lg shadow-md flex-shrink-0 hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <div className="mt-3 flex-grow min-h-0">
            <Link href="/portfolio">
              <p className="text-base text-gray-600 dark:text-gray-300 mb-2 font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                {featuredProject.title}
              </p>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed overflow-hidden">{featuredProject.description}</p>
          </div>
        </div>

        {/* Latest Blog Block */}
        <div className="bento-item-3 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Latest Article</h3>
          {latestPost ? (
            <>
              <Link href={`/blog/${latestPost.slug}`}>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                  {latestPost.title}
                </h4>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{latestPost.excerpt}</p>
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                {format(new Date(latestPost.date), 'MMM d, yyyy')} • {latestPost.readingTime}
              </div>
              <div className="flex gap-2 flex-wrap">
                {latestPost.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400 mb-4">No blog posts yet.</p>
              <Link
                href="/blog"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
              >
                Check back soon →
              </Link>
            </div>
          )}
        </div>

        {/* Tech Stack Block */}
        <div className="bento-item-4 bg-gradient-to-r from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Tech Stack</h3>
          <TechCarousel />
        </div>
      </div>
    </Layout>
  );
} 