import { techStack } from '@/lib/data';

export default function TechCarousel() {
  const renderTechItem = (tech: any, prefix: string) => {
    const isEmoji = /[\u1F600-\u1F64F]|[\u1F300-\u1F5FF]|[\u1F680-\u1F6FF]|[\u1F1E0-\u1F1FF]|[\u2600-\u26FF]|[\u2700-\u27BF]/.test(tech.shortName);
    
    return (
      <div key={`${prefix}-${tech.name}`} className="flex items-center space-x-3 flex-shrink-0">
        <div className={`w-12 h-12 ${tech.color} rounded-xl flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl border border-white/10`}>
          {isEmoji ? (
            <span className="text-xl">{tech.shortName}</span>
          ) : (
            <span className="text-white font-bold text-sm">{tech.shortName}</span>
          )}
        </div>
        <span className="text-sm font-medium text-white whitespace-nowrap">{tech.name}</span>
      </div>
    );
  };

  return (
    <div className="tech-carousel border border-white/10 rounded-lg p-4 bg-black/20">
      <div className="tech-carousel-track">
        {/* First set of tech items */}
        <div className="flex items-center space-x-10 mr-10">
          {techStack.map((tech) => renderTechItem(tech, 'first'))}
        </div>
        
        {/* Duplicate set for seamless infinite loop */}
        <div className="flex items-center space-x-10 mr-10">
          {techStack.map((tech) => renderTechItem(tech, 'second'))}
        </div>
      </div>
    </div>
  );
} 