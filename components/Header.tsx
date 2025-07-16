'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { profileInfo } from '@/lib/data';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'About Me', href: '/about' },
];

export default function Header() {
  const pathname = usePathname();
  const [displayedText, setDisplayedText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const fullText = profileInfo.name;

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    if (pathname === '/') {
      setIsAnimating(true);
      setDisplayedText('');
      
      const animateText = () => {
        let currentIndex = 0;
        const interval = setInterval(() => {
          if (currentIndex <= fullText.length) {
            setDisplayedText(fullText.slice(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(interval);
            setTimeout(() => setIsAnimating(false), 1000); // Keep cursor for a bit
          }
        }, 120); // Slightly faster for better effect
      };

      const timer = setTimeout(animateText, 800); // Longer delay for dramatic effect
      return () => {
        clearTimeout(timer);
      };
    } else {
      setDisplayedText(fullText);
      setIsAnimating(false);
    }
  }, [pathname, fullText]);

  const handleMouseEnter = () => {
    if (pathname === '/' && !isAnimating) {
      setIsAnimating(true);
      setDisplayedText('');
      
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => setIsAnimating(false), 500);
        }
      }, 80); // Faster on hover
    }
  };

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo on left */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/Embrace-Envole-Excel_logo-nbg.svg"
                alt="EMBRACE EVOLVE EXCEL Logo"
                width={96}
                height={96}
                className="h-20 w-auto mr-4"
              />
            </Link>
          </div>

          {/* Centered Herman Teng */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="transition-colors">
              <span 
                className={`signature-text handwriting-style ${isAnimating ? 'animating' : ''}`}
                onMouseEnter={handleMouseEnter}
              >
                {displayedText}
                {isAnimating && <span className="signature-cursor">|</span>}
              </span>
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