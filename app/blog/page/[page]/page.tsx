import { notFound } from 'next/navigation';
import Layout from '@/components/Layout';
import BlogCard from '@/components/BlogCard';
import GoToTopButton from '@/components/GoToTopButton';
import Pagination from '@/components/Pagination';
import { getPaginatedPosts } from '@/lib/blog';

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