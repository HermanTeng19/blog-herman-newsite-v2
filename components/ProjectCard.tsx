import Image from 'next/image';
import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 cursor-pointer hover:text-blue-600 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
          Check Details
        </button>
      </div>
    </div>
  );
} 