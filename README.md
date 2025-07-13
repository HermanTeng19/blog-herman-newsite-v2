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

## 🎨 Design Features

- **Bento Grid Layout**: Modern card-based home page design
- **Animated Tech Stack**: Infinite scrolling carousel of technologies
- **Hover Effects**: Smooth transitions and interactive elements
- **Custom Typography**: Inter and JetBrains Mono fonts
- **Color Scheme**: Professional gradient backgrounds and consistent branding

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
│   └── TechCarousel.tsx   # Animated tech stack carousel
├── content/               # Markdown content
│   └── posts/             # Blog posts
├── lib/                   # Utility functions and data
│   ├── blog.ts            # Blog data management
│   ├── data.ts            # Static data (projects, tech stack)
│   └── types.ts           # TypeScript definitions
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

## 🎨 Styling

### Tailwind CSS Configuration
- Custom fonts (Inter, JetBrains Mono)
- Custom animations and keyframes
- Responsive utilities
- Component-specific styles

### Custom CSS Classes
- `.bento-grid`: Main grid layout
- `.tech-carousel`: Animated technology carousel
- `.project-card`: Portfolio project cards
- `.blog-card`: Blog post cards
- `.prose`: Markdown content styling

## 🔧 Configuration

### Environment Variables
No environment variables required for basic functionality.

### Customization
- Edit `lib/data.ts` to update tech stack and project information
- Modify `app/globals.css` for custom styles
- Update `lib/types.ts` for additional data types
- Customize `components/` for UI modifications

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Breakpoint-based layouts
- Touch-friendly interactions
- Optimized images for different screen sizes

## 🔍 SEO Features

- Automatic sitemap generation
- Meta tags with Open Graph and Twitter Cards
- Structured data for blog posts
- Semantic HTML markup
- Fast loading times for better search ranking

## 🚦 Future Enhancements

- [ ] Search functionality
- [ ] Comment system
- [ ] Newsletter subscription
- [ ] Dark mode toggle
- [ ] RSS feed
- [ ] Related posts suggestions
- [ ] Social sharing buttons
- [ ] Analytics integration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Herman Teng**
- Website: [hermanteng.dev](https://hermanteng.dev)
- Email: contact@hermanteng.dev

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS 