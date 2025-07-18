import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import Layout from '@/components/Layout';
import GoToTopButton from '@/components/GoToTopButton';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = format(new Date(post.date), 'MMMM d, yyyy');

  return (
    <Layout>
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center mb-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">{formattedDate}</span>
            <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{post.readingTime}</span>
            <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">By {post.author}</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">{post.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full border border-gray-200 dark:border-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
      
      <GoToTopButton />
    </Layout>
  );
} 