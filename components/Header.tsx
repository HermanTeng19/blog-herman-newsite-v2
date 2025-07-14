'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { profileInfo } from '@/lib/data';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'About Me', href: '/about' },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo on left */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/Embrace-Envole-Excel_logo-nbg.svg"
                alt="EMBRACE EVOLVE EXCEL Logo"
                width={128}
                height={128}
                className="h-32 w-auto mr-4"
              />
            </Link>
          </div>

          {/* Centered Herman Teng */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="font-mono text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              {profileInfo.name}
            </Link>
          </div>

          {/* Navigation on right */}
          <nav className="flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link text-gray-700 hover:text-blue-600 font-medium transition-colors relative ${
                  isActive(item.href) 
                    ? 'text-blue-600 after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:rounded-sm' 
                    : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
} 