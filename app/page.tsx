import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import Layout from '@/components/Layout';
import TechCarousel from '@/components/TechCarousel';
import { getLatestPost } from '@/lib/blog';
import { profileInfo, featuredProject } from '@/lib/data';

export default async function Home() {
  const latestPost = await getLatestPost();

  return (
    <Layout>
      <div className="bento-grid">
        {/* Profile Block */}
        <div className="bento-item-1 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 flex flex-col justify-start">
          <div className="text-center">
            <Image
              src={profileInfo.profileImage}
              alt={profileInfo.name}
              width={96}
              height={96}
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold text-gray-900 mb-3">{profileInfo.name}</h1>
            <p className="text-lg text-gray-600 font-medium mb-2">{profileInfo.title}</p>
            <p className="text-base text-gray-500">{profileInfo.subtitle}</p>
          </div>
        </div>

        {/* Featured Project Block */}
        <div className="bento-item-2 bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-6 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Featured Project</h3>
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
              <p className="text-base text-gray-600 mb-2 font-bold hover:text-blue-600 transition-colors cursor-pointer">
                {featuredProject.title}
              </p>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed overflow-hidden">{featuredProject.description}</p>
          </div>
        </div>

        {/* Latest Blog Block */}
        <div className="bento-item-3 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Latest Article</h3>
          {latestPost ? (
            <>
              <Link href={`/blog/${latestPost.slug}`}>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                  {latestPost.title}
                </h4>
              </Link>
              <p className="text-sm text-gray-600 mb-4">{latestPost.excerpt}</p>
              <div className="text-xs text-gray-500 mb-3">
                {format(new Date(latestPost.date), 'MMM d, yyyy')} • {latestPost.readingTime}
              </div>
              <div className="flex gap-2 flex-wrap">
                {latestPost.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">No blog posts yet.</p>
              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Check back soon →
              </Link>
            </div>
          )}
        </div>

        {/* Tech Stack Block */}
        <div className="bento-item-4 bg-gradient-to-r from-orange-50 to-red-100 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Tech Stack</h3>
          <TechCarousel />
        </div>
      </div>
    </Layout>
  );
} 