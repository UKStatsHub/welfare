'use client';

import { ExternalLink } from 'lucide-react';

interface QuickLink {
  title: string;
  url: string;
  description: string;
  icon?: string;
}

interface QuickLinksProps {
  links: QuickLink[];
}

export function QuickLinks({ links }: QuickLinksProps) {
  return (
    <section className="bg-gov-grey-50 border-y border-gov-grey-200 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gov-blue mb-6">
          Quick Links to Official Sources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-white border border-gov-grey-200 hover:border-gov-blue hover:shadow-gov transition-all group"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-medium text-gov-blue group-hover:underline">
                  {link.title}
                </h3>
                <ExternalLink className="h-4 w-4 text-gov-grey-400 group-hover:text-gov-blue" />
              </div>
              <p className="text-sm text-gov-grey-500 mt-1">
                {link.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
