import { techStack } from '@/lib/data';

export default function TechCarousel() {
  return (
    <div className="tech-carousel">
      <div className="tech-carousel-track">
        {/* First set of tech items */}
        <div className="flex items-center space-x-12 mr-12">
          {techStack.map((tech) => (
            <div key={`first-${tech.name}`} className="flex items-center space-x-3 flex-shrink-0">
              <div className={`w-8 h-8 ${tech.color} rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
                {tech.shortName}
              </div>
              <span className="text-sm font-medium whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
        
        {/* Duplicate set for seamless infinite loop */}
        <div className="flex items-center space-x-12 mr-12">
          {techStack.map((tech) => (
            <div key={`second-${tech.name}`} className="flex items-center space-x-3 flex-shrink-0">
              <div className={`w-8 h-8 ${tech.color} rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
                {tech.shortName}
              </div>
              <span className="text-sm font-medium whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 