import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';

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