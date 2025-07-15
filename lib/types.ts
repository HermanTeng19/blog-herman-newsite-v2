export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  readingTime: string;
  image?: string;
  author?: string;
  featured?: boolean;
}

export interface BlogPostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  image?: string;
  author?: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface TechStack {
  name: string;
  shortName: string;
  color: string;
  icon?: string;
  logo?: string;
}

export interface BlogMetadata {
  totalPosts: number;
  totalPages: number;
  currentPage: number;
  postsPerPage: number;
}

export interface PaginatedPosts {
  posts: BlogPost[];
  metadata: BlogMetadata;
} 