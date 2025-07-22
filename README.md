# Herman Teng - Tech Blog & Portfolio

A modern, high-performance blog website built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Features Static Site Generation (SSG) for fast load times, markdown-based content management, and a responsive design.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Static Site Generation**: Pre-rendered pages for optimal performance and SEO
- **Markdown-based Content**: Easy content management with frontmatter support
- **Responsive Design**: Mobile-first approach with bento grid layout
- **Performance Optimized**: Image optimization, code splitting, and caching
- **Type Safety**: Full TypeScript support throughout the application
- **Component Library**: Reusable UI components with consistent styling
- **Dark Mode Support**: Light/dark theme toggle with persistent user preference

## 🎨 Design Features

- **Bento Grid Layout**: Modern card-based home page design
- **Animated Tech Stack**: Infinite scrolling carousel of technologies
- **Hover Effects**: Smooth transitions and interactive elements
- **Custom Typography**: Inter and JetBrains Mono fonts
- **Color Scheme**: Professional gradient backgrounds and consistent branding
- **Theme Toggle**: Animated sun/moon icon for seamless light/dark mode switching

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── blog/              # Blog pages
│   │   ├── [slug]/        # Individual blog posts
│   │   └── page.tsx       # Blog listing page
│   ├── portfolio/         # Portfolio page
│   ├── about/             # About page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Layout.tsx         # Main layout wrapper
│   ├── BlogCard.tsx       # Blog post card component
│   ├── ProjectCard.tsx    # Portfolio project card
│   ├── TechCarousel.tsx   # Animated tech stack carousel
│   ├── ThemeToggle.tsx    # Light/dark mode toggle button
│   └── ThemeProvider.tsx  # Theme context provider
├── content/               # Markdown content
│   └── posts/             # Blog posts
├── lib/                   # Utility functions and data
│   ├── blog.ts            # Blog data management
│   ├── data.ts            # Static data (projects, tech stack)
│   ├── types.ts           # TypeScript definitions
│   └── theme.ts           # Theme utility functions
├── public/                # Static assets
└── prototype/             # Original HTML prototype
```

## 🛠️ Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

### Content Management
- **Gray Matter**: Frontmatter parsing for markdown
- **Remark**: Markdown processing
- **Remark HTML**: HTML generation from markdown

### Development
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 📝 Content Management

### Blog Posts

Blog posts are stored as markdown files in the `content/posts/` directory. Each post includes frontmatter with metadata:

```markdown
---
title: "Your Blog Post Title"
date: "2024-12-15"
excerpt: "A brief description of your post"
tags: ["React", "JavaScript", "Frontend"]
image: "https://example.com/image.jpg"
featured: true
---

# Your Blog Post Content

Write your blog post content here using markdown syntax.
```

### Using Local Images for Blog Post Featured Images

You can use local images for your blog post's featured image instead of an external URL. This is recommended for better performance and reliability.

#### 1. Store Your Image
- Place your image in the `public/images/blog/` directory.
- Example: `public/images/blog/my-awesome-post.jpg`

#### 2. Reference the Image in Frontmatter
- In your markdown file's frontmatter, set the `image` field to the relative path starting with `/images/blog/`:

```markdown
---
title: "My Awesome Blog Post"
date: "2024-05-20"
excerpt: "A short summary of what this post is about."
tags: ["Next.js", "React", "Tutorial"]
image: "/images/blog/my-awesome-post.jpg"  # Local image path
readingTime: "8 min read"
author: "Herman Teng"
---
```

#### 3. Best Practices
- Recommended size: 1200x630px (16:9 ratio) for optimal display
- File formats: JPG, PNG, or WebP
- File size: Keep under 500KB for fast loading
- Naming: Use descriptive names with hyphens (e.g., `nextjs-tutorial-2024.jpg`)

#### 4. Example Directory Structure
```
public/
  images/
    blog/
      my-awesome-post.jpg
content/
  posts/
    my-awesome-post.md
```

Your blog post will now use the local image as its featured image, ensuring fast and reliable loading.

### Adding New Posts

1. Create a new `.md` file in `content/posts/`
2. Add frontmatter with required fields (title, date, excerpt, tags)
3. Write your content using markdown syntax
4. The post will automatically appear in the blog listing

### Frontmatter Fields

- `title`: Post title (required)
- `date`: Publication date in YYYY-MM-DD format (required)
- `excerpt`: Brief description for previews (required)
- `tags`: Array of tags for categorization (required)
- `image`: Featured image URL (optional)
- `featured`: Boolean to mark as featured post (optional)
- `author`: Author name (optional, defaults to "Herman Teng")

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd herman-teng-blog
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

### Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎯 Key Components

### Header Component
- Responsive navigation with logo and menu
- Active state indicators
- Mobile-friendly design
- Light/dark mode toggle with animated icons

### Bento Grid Layout
- CSS Grid-based layout
- Responsive design that adapts to different screen sizes
- Four main sections: Profile, Featured Project, Latest Blog, Tech Stack

### Blog System
- Markdown-based content management
- Automatic slug generation
- Tag-based categorization
- Reading time calculation
- SEO-friendly URLs

### Tech Stack Carousel
- Infinite scrolling animation
- Hover to pause functionality
- Configurable technology items
- Responsive spacing

## 📊 Performance Features

- **Static Site Generation**: Pages pre-rendered at build time
- **Image Optimization**: Next.js Image component with automatic optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **Font Optimization**: Google Fonts with display swap
- **SEO Optimization**: Meta tags, Open Graph, and Twitter Cards

## 🌙 Dark Mode

### Theme System
- **Automatic Detection**: Detects user's system preference on first visit
- **Persistent Storage**: Remembers user's theme choice using localStorage
- **Smooth Transitions**: Animated theme switching with CSS transitions
- **Comprehensive Coverage**: All components and pages support both themes

### Theme Toggle
- **Animated Icons**: Sun icon for light mode, moon icon for dark mode
- **Header Integration**: Located in the top-right navigation area
- **Accessibility**: Proper ARIA labels and keyboard navigation support
- **Visual Feedback**: Hover effects and active states for better UX

### Dark Mode Styling
- **Text Colors**: White headings and light gray body text for optimal contrast
- **Backgrounds**: Dark backgrounds with subtle gradients
- **Cards & Components**: Dark variants for all UI components
- **Images**: Maintained visibility and contrast in both themes

## 🎨 Styling

### Tailwind CSS Configuration
- Custom fonts (Inter, JetBrains Mono)
- Custom animations and keyframes
- Responsive utilities
- Component-specific styles
- Dark mode variants for all color utilities

### Custom CSS Classes
- `.bento-grid`: Main grid layout
- `.tech-carousel`: Animated technology carousel
- `.project-card`: Portfolio project cards
- `.blog-card`: Blog post cards
- `.prose`: Markdown content styling

## 🔧 Configuration

### Environment Variables

The following environment variables are used in this project. For Vercel deployment, set them in the Vercel dashboard under Project → Settings → Environment Variables.

| Variable Name                  | Required?   | Purpose/Notes                                                      |
|------------------------------- |------------|--------------------------------------------------------------------|
| `NEXT_PUBLIC_SITE_URL`         | Recommended| Canonical site URL for SEO/meta tags                               |
| `NEXT_PUBLIC_SITE_NAME`        | Recommended| Site name for SEO/meta tags                                        |
| `NEXT_PUBLIC_SITE_DESCRIPTION` | Recommended| Site description for SEO/meta tags                                 |
| `NEXT_PUBLIC_AUTHOR_NAME`      | Optional   | Author name for meta tags                                          |
| `NEXT_PUBLIC_AUTHOR_TITLE`     | Optional   | Author title for meta tags                                         |
| `NEXT_PUBLIC_AUTHOR_TWITTER`   | Optional   | Twitter handle for meta tags                                       |
| `NEXT_PUBLIC_THEME_COLOR`      | Optional   | Theme color for browser UI/meta tags                               |
| `NEXT_PUBLIC_OPENGRAPH_TYPE`   | Optional   | OpenGraph type (`website`, `article`, etc.)                        |
| `NEXT_PUBLIC_TWITTER_CARD_TYPE`| Optional   | Twitter card type (`summary_large_image`, etc.)                    |
| `NEXT_PUBLIC_DEFAULT_LOCALE`   | Optional   | Default locale for OpenGraph                                       |
| `PEXELS_API_KEY`               | Scripts    | API key for Pexels (used in scripts/replace-local-cover-images.ts) |
| `UNSPLASH_ACCESS_KEY`          | Scripts    | API key for Unsplash (used in scripts/replace-local-cover-images.ts)|

- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser and used for SEO, branding, and meta tags.
- `PEXELS_API_KEY` and `UNSPLASH_ACCESS_KEY` are only needed if you use the image replacement script for local development or build steps.
- If you do not set any environment variables, the site will use default values and still work, but for best SEO and branding, set the recommended ones.

#### Example: .env.example

```env
# Public variables for SEO/branding
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=Your Site Name
NEXT_PUBLIC_SITE_DESCRIPTION=Your site description
NEXT_PUBLIC_AUTHOR_NAME=Your Name
NEXT_PUBLIC_AUTHOR_TITLE=Your Title
NEXT_PUBLIC_AUTHOR_TWITTER=@yourtwitter
NEXT_PUBLIC_THEME_COLOR=#3b82f6
NEXT_PUBLIC_OPENGRAPH_TYPE=website
NEXT_PUBLIC_TWITTER_CARD_TYPE=summary_large_image
NEXT_PUBLIC_DEFAULT_LOCALE=en_US

# Only needed for scripts (not required for frontend deployment)
PEXELS_API_KEY=your_pexels_api_key
UNSPLASH_ACCESS_KEY=your_unsplash_access_key
```

### Customization
- Edit `lib/data.ts`