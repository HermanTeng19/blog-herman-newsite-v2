import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import Layout from '@/components/Layout';
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
            <span className="text-sm text-gray-500">{formattedDate}</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-sm text-gray-500">{post.readingTime}</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-sm text-gray-500">By {post.author}</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
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
    </Layout>
  );
} 