import { TechStack, Project } from './types';

export const techStack: TechStack[] = [
  { name: 'AI', shortName: '🤖', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
  { name: 'Claude Code', shortName: 'CL', color: 'bg-purple-500' },
  { name: 'n8n', shortName: 'n8n', color: 'bg-pink-500' },
  { name: 'SQL', shortName: 'SQL', color: 'bg-gray-600' },
  { name: 'DevOps', shortName: 'DO', color: 'bg-green-600' },
  { name: 'CI/CD', shortName: 'CI', color: 'bg-blue-600' },
  { name: 'DeepSeek', shortName: 'DS', color: 'bg-red-600' },
  { name: 'MCP', shortName: 'MCP', color: 'bg-teal-600' },
  { name: 'Next.js', shortName: '▲', color: 'bg-black' },
  { name: 'Python', shortName: '🐍', color: 'bg-yellow-500' },
  { name: 'React', shortName: '⚛️', color: 'bg-blue-500' },
  { name: 'TypeScript', shortName: 'TS', color: 'bg-blue-700' },
  { name: 'Node.js', shortName: '💚', color: 'bg-green-600' },
  { name: 'MongoDB', shortName: '🍃', color: 'bg-green-500' },
  { name: 'PostgreSQL', shortName: '🐘', color: 'bg-blue-800' },
  { name: 'Docker', shortName: '🐳', color: 'bg-blue-400' },
  { name: 'Kubernetes', shortName: '☸️', color: 'bg-blue-700' },
  { name: 'AWS', shortName: '☁️', color: 'bg-orange-500' },
  { name: 'GitHub', shortName: '🐙', color: 'bg-gray-800' },
  { name: 'Tailwind', shortName: '💨', color: 'bg-cyan-500' },
  { name: 'GraphQL', shortName: '◉', color: 'bg-pink-600' },
  { name: 'Redis', shortName: '⚡', color: 'bg-red-500' },
  { name: 'Vercel', shortName: '▲', color: 'bg-black' },
];

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with modern UI/UX and advanced features.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    featured: true,
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates and team features.',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Next.js', 'Firebase', 'Tailwind'],
    featured: true,
  },
  {
    id: 'data-visualization-dashboard',
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for complex data analysis and reporting.',
    image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['D3.js', 'React', 'Python'],
    featured: true,
  },
  {
    id: 'mobile-banking-app',
    title: 'Mobile Banking App',
    description: 'Secure mobile banking interface with advanced security features.',
    image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React Native', 'TypeScript', 'REST API'],
    featured: true,
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description: 'Full-stack dashboard with real-time analytics and comprehensive data visualization',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Node.js', 'D3.js', 'PostgreSQL'],
    featured: true,
  },
];

export const featuredProject = projects.find(p => p.id === 'analytics-dashboard') || projects[0];

export const profileInfo = {
  name: 'Herman Teng',
  title: 'Front-end Architect & Tech Blogger',
  subtitle: 'Building the future of web experiences',
  profileImage: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
  aboutImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600',
  bio: {
    intro: "I'm a passionate front-end architect and tech blogger with over 8 years of experience building scalable web applications. I specialize in modern JavaScript frameworks, performance optimization, and creating exceptional user experiences.",
    personal: "When I'm not coding, you can find me exploring new technologies, writing technical articles, or traveling to discover new cultures and perspectives. I believe that great software comes from understanding both the technical and human aspects of development.",
    collaboration: "I'm always excited to collaborate on innovative projects and share knowledge with the development community through my blog and open-source contributions.",
  },
}; 