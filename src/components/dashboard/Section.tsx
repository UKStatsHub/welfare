'use client';

import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, description, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-8 md:py-12 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="border-l-4 border-l-gov-green pl-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gov-blue">
            {title}
          </h2>
          {description && (
            <p className="text-gov-grey-600 mt-2 max-w-3xl">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
