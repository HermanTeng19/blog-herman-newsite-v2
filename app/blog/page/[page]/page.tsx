import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Layout from '@/components/Layout';
import BlogCard from '@/components/BlogCard';
import GoToTopButton from '@/components/GoToTopButton';
import Pagination from '@/components/Pagination';
import { getPaginatedPosts } from '@/lib/blog';

export async function generateMetadata({ params }: { params: { page: string } }): Promise<Metadata> {
  const page = parseInt(params.page);
  const pageTitle = page === 1 ? 'Blog' : `Blog - Page ${page}`;
  
  return {
    title: `${pageTitle} - Herman Teng Data Engineering & AI Blog`,
    description: 'Explore Herman Teng\'s latest articles on data engineering, AI, machine learning, Azure services, and insights into the future of technology and artificial intelligence.',
    keywords: [
      'Data Engineering Blog',
      'AI Articles',
      'Machine Learning',
      'Azure Data Services',
      'Tech Insights',
      'Data Science',
      'Artificial Intelligence',
      'Cloud Computing',
      'Herman Teng Blog'
    ],
    openGraph: {
      title: `${pageTitle} - Herman Teng Data Engineering & AI Blog`,
      description: 'Explore Herman Teng\'s latest articles on data engineering, AI, machine learning, Azure services, and insights into the future of technology and artificial intelligence.',
      url: `https://blog.hermanteng.net/blog/page/${page}`,
      type: 'website',
    },
    twitter: {
      title: `${pageTitle} - Herman Teng Data Engineering & AI Blog`,
      description: 'Explore Herman Teng\'s latest articles on data engineering, AI, machine learning, Azure services, and insights into the future of technology and artificial intelligence.',
    },
  };
}

export async function generateStaticParams() {
  // Generate static params for all possible pages
  const { metadata } = await getPaginatedPosts(1, 10);
  const pages = [];
  
  for (let i = 1; i <= metadata.totalPages; i++) {
    pages.push({ page: i.toString() });
  }
  
  return pages;
}

interface BlogPageProps {
  params: {
    page: string;
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const page = parseInt(params.page);
  
  // Validate page number
  if (isNaN(page) || page < 1) {
    notFound();
  }
  
  const { posts, metadata } = await getPaginatedPosts(page, 10);
  
  // If page number is too high, show 404
  if (page > metadata.totalPages) {
    notFound();
  }

  return (
    <Layout>
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Blog</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">Latest articles and insights</p>
      </div>
      
      <div className="space-y-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <BlogCard key={post.slug} post={post} layout="horizontal" />
          ))
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">No blog posts yet</h3>
            <p className="text-gray-600 dark:text-gray-300">Check back soon for new articles and insights.</p>
          </div>
        )}
      </div>
      
      {/* Pagination Component */}
      <Pagination
        currentPage={metadata.currentPage}
        totalPages={metadata.totalPages}
        totalPosts={metadata.totalPosts}
      />
      
      <GoToTopButton />
    </Layout>
  );
} 