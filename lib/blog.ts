import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { BlogPost, BlogPostFrontmatter, PaginatedPosts, BlogMetadata } from './types';

const postsDirectory = path.join(process.cwd(), 'content/posts');

// Ensure posts directory exists
if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true });
}

export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Process markdown content to HTML
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();
    
    // Validate frontmatter
    const frontmatter = data as BlogPostFrontmatter;
    if (!frontmatter.title || !frontmatter.date || !frontmatter.excerpt) {
      throw new Error(`Invalid frontmatter in ${slug}.md`);
    }
    
    return {
      slug,
      title: frontmatter.title,
      date: frontmatter.date,
      excerpt: frontmatter.excerpt,
      content: contentHtml,
      tags: frontmatter.tags || [],
      readingTime: calculateReadingTime(content),
      image: frontmatter.image,
      author: frontmatter.author || 'Herman Teng',
      featured: frontmatter.featured || false,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = getAllPostSlugs();
  const posts: BlogPost[] = [];
  
  for (const slug of slugs) {
    const post = await getPostBySlug(slug);
    if (post) {
      posts.push(post);
    }
  }
  
  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(post => post.featured);
}

export async function getLatestPost(): Promise<BlogPost | null> {
  const allPosts = await getAllPosts();
  return allPosts.length > 0 ? allPosts[0] : null;
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(post => post.tags.includes(tag));
}

export async function getPaginatedPosts(page: number = 1, postsPerPage: number = 10): Promise<PaginatedPosts> {
  const allPosts = await getAllPosts();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const posts = allPosts.slice(startIndex, endIndex);
  
  const metadata: BlogMetadata = {
    totalPosts,
    totalPages,
    currentPage: page,
    postsPerPage,
  };
  
  return {
    posts,
    metadata,
  };
}

export function getAllTags(): string[] {
  const slugs = getAllPostSlugs();
  const tags = new Set<string>();
  
  slugs.forEach(slug => {
    try {
      const fullPath = path.join(postsDirectory, `${slug}.md`);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      
      if (data.tags && Array.isArray(data.tags)) {
        data.tags.forEach((tag: string) => tags.add(tag));
      }
    } catch (error) {
      console.error(`Error reading tags from ${slug}:`, error);
    }
  });
  
  return Array.from(tags).sort();
} 