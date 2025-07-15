const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Directories
const oldPostsDir = path.join(__dirname, 'archive/_posts');
const newPostsDir = path.join(__dirname, 'content/posts');

// Ensure new posts directory exists
if (!fs.existsSync(newPostsDir)) {
  fs.mkdirSync(newPostsDir, { recursive: true });
}

// Function to convert old frontmatter to new format
function convertFrontmatter(oldData, filename) {
  const newData = {};
  
  // Title - keep as is but add quotes
  newData.title = oldData.title || filename.replace(/\.md$/, '').replace(/-/g, ' ');
  
  // Date - convert to YYYY-MM-DD format
  if (oldData.date) {
    const date = new Date(oldData.date);
    newData.date = date.toISOString().split('T')[0];
  } else {
    newData.date = new Date().toISOString().split('T')[0];
  }
  
  // Tags - normalize case and convert categories to tags
  const tags = [];
  if (oldData.tags && Array.isArray(oldData.tags)) {
    tags.push(...oldData.tags);
  }
  if (oldData.Categories && Array.isArray(oldData.Categories)) {
    tags.push(...oldData.Categories);
  }
  if (oldData.categories && Array.isArray(oldData.categories)) {
    tags.push(...oldData.categories);
  }
  
  // Remove duplicates and clean up tags
  newData.tags = [...new Set(tags)].map(tag => 
    typeof tag === 'string' ? tag.trim() : String(tag).trim()
  ).filter(tag => tag.length > 0);
  
  // Image - use cover or thumbnail if available
  if (oldData.cover) {
    newData.image = oldData.cover;
  } else if (oldData.thumbnail) {
    newData.image = oldData.thumbnail;
  }
  
  // Author - default to Herman Teng
  newData.author = 'Herman Teng';
  
  // Featured - set some posts as featured based on criteria
  newData.featured = false;
  
  return newData;
}

// Function to generate excerpt from content
function generateExcerpt(content) {
  // Remove markdown syntax and get first paragraph
  const cleanContent = content
    .replace(/^---[\s\S]*?---/, '') // Remove frontmatter
    .replace(/#{1,6}\s+/g, '') // Remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/`(.*?)`/g, '$1') // Remove inline code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '') // Remove images
    .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
    .replace(/<!-- more -->/g, '') // Remove more tag
    .trim();
  
  // Get first meaningful paragraph
  const paragraphs = cleanContent.split('\n\n').filter(p => p.trim().length > 0);
  const firstParagraph = paragraphs[0] || '';
  
  // Truncate to reasonable length
  const excerpt = firstParagraph.length > 200 
    ? firstParagraph.substring(0, 200).trim() + '...'
    : firstParagraph;
    
  return excerpt || 'A comprehensive guide covering important concepts and practical implementations.';
}

// Function to clean up content
function cleanContent(content) {
  // Remove the old more tag
  return content.replace(/<!-- more -->/g, '');
}

// Function to convert slug
function convertSlug(filename) {
  return filename
    .replace(/\.md$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Function to clean up existing migrated posts
function cleanupExistingPosts() {
  console.log('🧹 Cleaning up existing migrated posts...\n');
  
  const existingFiles = fs.readdirSync(newPostsDir).filter(file => file.endsWith('.md'));
  const migratedFiles = [];
  
  existingFiles.forEach(file => {
    // Skip the original sample posts
    if (['github-copilot-ai-programming.md', 'google-gemini-notebooklm-productivity.md', 
         'microservices-architecture.md', 'web-performance-optimization.md', 
         'modern-react-patterns.md'].includes(file)) {
      return;
    }
    
    const filePath = path.join(newPostsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    
    // Check if tags is a string (indicating it's a migrated post with the bug)
    if (typeof data.tags === 'string') {
      migratedFiles.push(file);
      fs.unlinkSync(filePath);
      console.log(`🗑️  Removed: ${file}`);
    }
  });
  
  console.log(`Cleaned up ${migratedFiles.length} files with tag issues\n`);
}

// Main migration function
function migratePost(filename) {
  const oldFilePath = path.join(oldPostsDir, filename);
  const fileContent = fs.readFileSync(oldFilePath, 'utf8');
  const { data: oldData, content } = matter(fileContent);
  
  // Convert frontmatter
  const newData = convertFrontmatter(oldData, filename);
  
  // Generate excerpt from content
  newData.excerpt = generateExcerpt(content);
  
  // Clean content
  const cleanedContent = cleanContent(content);
  
  // Create new slug
  const newSlug = convertSlug(filename);
  const newFilePath = path.join(newPostsDir, `${newSlug}.md`);
  
  // Check if file already exists
  if (fs.existsSync(newFilePath)) {
    console.log(`⚠️  Skipping ${filename} - already exists as ${newSlug}.md`);
    return;
  }
  
  // Create new frontmatter - FIXED: tags as array, not JSON string
  const newFrontmatter = {
    title: newData.title,
    date: newData.date,
    excerpt: newData.excerpt,
    tags: newData.tags, // This will be an array
    author: newData.author,
    featured: newData.featured
  };
  
  if (newData.image) {
    newFrontmatter.image = newData.image;
  }
  
  // Build new file content
  const newFileContent = matter.stringify(cleanedContent, newFrontmatter);
  
  // Write new file
  fs.writeFileSync(newFilePath, newFileContent);
  console.log(`✅ Migrated: ${filename} → ${newSlug}.md`);
}

// Main execution
function main() {
  console.log('🚀 Starting blog post migration...\n');
  
  // First, clean up existing migrated posts with issues
  cleanupExistingPosts();
  
  // Get all markdown files from old posts directory
  const files = fs.readdirSync(oldPostsDir).filter(file => file.endsWith('.md'));
  
  console.log(`Found ${files.length} posts to migrate:\n`);
  
  // Migrate each file
  files.forEach(file => {
    try {
      migratePost(file);
    } catch (error) {
      console.error(`❌ Error migrating ${file}:`, error.message);
    }
  });
  
  console.log('\n🎉 Migration completed!');
  console.log('\nNext steps:');
  console.log('1. Review the migrated posts in content/posts/');
  console.log('2. Update any image paths that might be broken');
  console.log('3. Adjust featured flags for posts you want to highlight');
  console.log('4. Run "npm run build" to test the migration');
}

// Run the migration
if (require.main === module) {
  main();
}

module.exports = { migratePost, convertFrontmatter, generateExcerpt }; 