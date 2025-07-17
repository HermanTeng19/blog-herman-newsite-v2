const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
require('dotenv/config');

// === CONFIGURATION ===
const POSTS_DIR = path.join(__dirname, '../content/posts');
const LOCAL_IMAGE_PREFIXES = ['/img/', '/images/', './img/', './images/'];
const PEXELS_API_KEY = process.env.PEXELS_API_KEY || '';
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || '';

if (!PEXELS_API_KEY || !UNSPLASH_ACCESS_KEY) {
  console.error('Missing PEXELS_API_KEY or UNSPLASH_ACCESS_KEY in environment variables.');
  process.exit(1);
}

// === Helper Functions ===
function isLocalImage(imagePath: any) {
  return LOCAL_IMAGE_PREFIXES.some(prefix => imagePath.startsWith(prefix));
}

async function searchPexels(query: any) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1`;
  const res = await fetch(url, {
    headers: { Authorization: PEXELS_API_KEY },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.photos?.[0]?.src?.original || null;
}

async function searchUnsplash(query: any) {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&client_id=${UNSPLASH_ACCESS_KEY}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  return data.results?.[0]?.urls?.regular || null;
}

async function findBestOnlineImage(query: any) {
  // Try Pexels first, then Unsplash
  let image = await searchPexels(query);
  if (image) return image;
  image = await searchUnsplash(query);
  return image;
}

async function processPost(filePath: any) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  if (!data.image || !isLocalImage(data.image)) return false;

  // Use title, tags, excerpt for search
  const query = [data.title, ...(data.tags || []), data.excerpt].filter(Boolean).join(' ');
  console.log(`Searching image for: ${data.title}`);
  const onlineImage = await findBestOnlineImage(query);
  if (!onlineImage) {
    console.warn(`No online image found for: ${data.title}`);
    return false;
  }
  data.image = onlineImage;
  const newRaw = matter.stringify(content, data);
  fs.writeFileSync(filePath, newRaw, 'utf-8');
  console.log(`Updated cover image for: ${data.title}`);
  return true;
}

async function main() {
  const files = fs.readdirSync(POSTS_DIR).filter((f: any) => f.endsWith('.md'));
  for (const file of files) {
    const filePath = path.join(POSTS_DIR, file);
    await processPost(filePath);
  }
  console.log('Done!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

/*
Instructions:
1. Install dependencies: npm install gray-matter dotenv
2. Get API keys from https://www.pexels.com/api/ and https://unsplash.com/developers
3. Create a .env.local file in your project root with:
   PEXELS_API_KEY=your_pexels_api_key_here
   UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
4. Run: npx ts-node scripts/replace-local-cover-images.ts
*/ 