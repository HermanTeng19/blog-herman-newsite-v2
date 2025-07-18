import { Metadata } from 'next';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Portfolio - Herman Teng Data Engineering & AI Projects',
  description: 'Explore Herman Teng\'s portfolio of data engineering projects, AI-powered applications, and innovative solutions built with Microsoft Azure, machine learning, and modern technologies.',
  keywords: [
    'Herman Teng Portfolio',
    'Data Engineering Projects',
    'AI Applications',
    'Azure Projects',
    'Machine Learning Solutions',
    'Data Architecture',
    'Cloud Computing Projects',
    'Tech Portfolio'
  ],
  openGraph: {
    title: 'Portfolio - Herman Teng Data Engineering & AI Projects',
    description: 'Explore Herman Teng\'s portfolio of data engineering projects, AI-powered applications, and innovative solutions built with Microsoft Azure, machine learning, and modern technologies.',
    url: 'https://hermanteng.dev/portfolio',
    type: 'website',
  },
  twitter: {
    title: 'Portfolio - Herman Teng Data Engineering & AI Projects',
    description: 'Explore Herman Teng\'s portfolio of data engineering projects, AI-powered applications, and innovative solutions built with Microsoft Azure, machine learning, and modern technologies.',
  },
};

export default function Portfolio() {
  return (
    <Layout>
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Portfolio</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">Recent projects and implementations</p>
      </div>
      
      <div className="portfolio-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Layout>
  );
} 