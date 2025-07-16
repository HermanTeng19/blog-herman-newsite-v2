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

## 🛠️ How to Add or Modify a Project in the Portfolio

### Adding a New Project
1. Open `lib/data.ts` in your code editor.
2. Locate the `projects` array. Each project is a JSON object inside this array.
3. Copy an existing project object as a template:
   ```js
   {
     id: 'your-unique-id',
     title: 'Your Project Title',
     description: 'A short description of your project.',
     image: 'https://your-image-url.jpg',
     technologies: ['React', 'Node.js', 'TypeScript'],
     link: 'https://your-live-demo.com',
     github: 'https://github.com/your-repo',
     featured: false // or true if you want it to appear as Featured Project
   },
   ```
4. Paste it after the last project in the array (but before the closing `];`).
5. Fill in your own details for each field:
   - `id`: Unique string, no spaces (e.g., 'my-cool-app')
   - `title`: Name of your project
   - `description`: Short summary
   - `image`: URL to a project image (use a real image URL or upload to `public/images/projects/` and use a relative path)
   - `technologies`: Array of tech used
   - `link`: (Optional) Live demo URL
   - `github`: (Optional) GitHub repo URL
   - `featured`: `true` to show as Featured Project on Home page, otherwise `false`
6. Save the file.
7. Refresh your Portfolio page to see the new project.

### Editing an Existing Project
1. In `lib/data.ts`, find the project you want to edit in the `projects` array.
2. Change any field (title, description, image, etc.) as needed.
3. Save the file and refresh your site.

### Tips
- The `id` must be unique for each project.
- Only one project should have `featured: true` for the Home page Featured Project.
- Use high-quality images for best appearance.
- If running in development (`npm run dev`), just save and refresh. For production, rebuild with `npm run build`.

--- 