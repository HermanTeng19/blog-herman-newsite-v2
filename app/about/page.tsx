import Image from 'next/image';
import Layout from '@/components/Layout';
import { profileInfo } from '@/lib/data';

export default function About() {
  return (
    <Layout>
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
        <p className="text-xl text-gray-600">Get to know me better</p>
      </div>
      
      <div className="about-grid">
        <div>
          <Image
            src={profileInfo.aboutImage}
            alt={`${profileInfo.name} Lifestyle`}
            width={600}
            height={400}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Hello, I'm Herman</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              {profileInfo.bio.intro}
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              {profileInfo.bio.personal}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {profileInfo.bio.collaboration}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
} 