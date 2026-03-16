'use client';

import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gov-blue text-white print:hidden">
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-gov-blue focus:px-4 focus:py-2 focus:outline focus:outline-2 focus:outline-white"
      >
        Skip to main content
      </a>
      
      <div className="max-w-6xl mx-auto px-4">
        {/* Crown logo area */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <svg
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="h-8 w-8"
            >
              <path
                fill="currentColor"
                d="M24 4l4.5 9.5L40 16l-7.5 7 2 11L24 29l-10.5 5 2-11L8 16l11.5-2.5z"
              />
            </svg>
            <div>
              <span className="block text-sm opacity-80">UK Statistics Hub</span>
              <span className="block text-xl font-bold tracking-tight">Welfare Statistics</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#universal-credit"
              className="text-sm hover:underline focus:outline focus:outline-2 focus:outline-white"
            >
              Universal Credit
            </Link>
            <Link
              href="#disability-benefits"
              className="text-sm hover:underline focus:outline focus:outline-2 focus:outline-white"
            >
              Disability Benefits
            </Link>
            <Link
              href="#asylum-support"
              className="text-sm hover:underline focus:outline focus:outline-2 focus:outline-white"
            >
              Asylum Support
            </Link>
            <Link
              href="#sources"
              className="text-sm hover:underline focus:outline focus:outline-2 focus:outline-white"
            >
              Sources
            </Link>
          </nav>
          
          <Link
            href="https://github.com/UKStatsHub/welfare"
            className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
            <span className="hidden sm:inline">GitHub</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
