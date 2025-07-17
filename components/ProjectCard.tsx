import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Determine primary link (prefer live site over GitHub)
  const primaryLink = project.link || project.github;
  
  // Handle "Check Details" click for projects without links
  const handleCheckDetails = () => {
    alert('Project details coming soon! This project is currently in development.');
  };

  return (
    <div className="project-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 h-full flex flex-col">
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        {primaryLink ? (
          <Link 
            href={primaryLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            {project.title}
          </Link>
        ) : (
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {project.title}
          </h3>
        )}
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Project Links Section */}
          {(project.link || project.github) ? (
            <div className="flex gap-2">
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-center"
                >
                  View Live Site
                </Link>
              )}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${project.link ? 'flex-1' : 'w-full'} bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  {project.link ? 'GitHub' : 'View on GitHub'}
                </Link>
              )}
            </div>
          ) : (
            <button 
              onClick={handleCheckDetails}
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Check Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 