import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { BlogPost } from '@/lib/types';

interface BlogCardProps {
  post: BlogPost;
  layout?: 'horizontal' | 'vertical';
}

export default function BlogCard({ post, layout = 'horizontal' }: BlogCardProps) {
  const formattedDate = format(new Date(post.date), 'MMMM d, yyyy');

  if (layout === 'vertical') {
    return (
      <article className="blog-card bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <Image
          src={post.image || 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600'}
          alt={post.title}
          width={600}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <Link href={`/blog/${post.slug}`}>
            <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
              {post.title}
            </h3>
          </Link>
          <div className="flex items-center mb-4">
            <span className="text-sm text-gray-500">{formattedDate}</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-sm text-gray-500">{post.readingTime}</span>
          </div>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex items-center justify-between">
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
            <Link
              href={`/blog/${post.slug}`}
              className="flex items-center text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
            >
              Read more →
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="blog-card bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="flex">
        <Image
          src={post.image || 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600'}
          alt={post.title}
          width={256}
          height={192}
          className="w-64 h-48 object-cover"
        />
        <div className="p-8 flex-1">
          <Link href={`/blog/${post.slug}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
              {post.title}
            </h3>
          </Link>
          <div className="flex items-center mb-4">
            <span className="text-sm text-gray-500">{formattedDate}</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-sm text-gray-500">{post.readingTime}</span>
          </div>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex items-center justify-between">
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
            <Link
              href={`/blog/${post.slug}`}
              className="flex items-center text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
            >
              Read more →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
} 