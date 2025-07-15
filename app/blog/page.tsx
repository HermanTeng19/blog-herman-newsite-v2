import { redirect } from 'next/navigation';

export default async function Blog() {
  // Redirect to first page of blog posts
  redirect('/blog/page/1');
} 