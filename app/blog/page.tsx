import Layout from '@/components/Layout';
import BlogCard from '@/components/BlogCard';
import GoToTopButton from '@/components/GoToTopButton';
import { getPaginatedPosts } from '@/lib/blog';

export default async function Blog() {
  const { posts } = await getPaginatedPosts(1, 10);

  return (
    <Layout>
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Blog</h2>
        <p className="text-xl text-gray-600">Latest articles and insights</p>
      </div>
      
      <div className="space-y-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <BlogCard key={post.slug} post={post} layout="horizontal" />
          ))
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No blog posts yet</h3>
            <p className="text-gray-600">Check back soon for new articles and insights.</p>
          </div>
        )}
      </div>
      
      <GoToTopButton />
    </Layout>
  );
} 