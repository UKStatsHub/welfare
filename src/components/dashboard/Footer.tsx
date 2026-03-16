'use client';

import Link from 'next/link';
import { ExternalLink, Mail } from 'lucide-react';

interface FooterProps {
  lastUpdated: string;
}

export function Footer({ lastUpdated }: FooterProps) {
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  return (
    <footer className="bg-gov-grey-900 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Last Updated Banner */}
        <div className="bg-gov-blue px-4 py-3 -mx-4 sm:-mx-6 mb-8">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            <span className="text-sm font-medium">
              Data updated daily from official government sources
            </span>
            <span className="text-sm">
              Last updated: {formatDate(lastUpdated)}
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <p className="text-gov-grey-200 text-sm leading-relaxed">
              This dashboard provides comprehensive UK welfare statistics compiled from 
              official government sources. Data is updated daily to ensure accuracy and 
              timeliness for researchers, policymakers, and the public.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Official Sources</h3>
            <ul className="space-y-2">
              {[
                { name: 'DWP Statistics', url: 'https://www.gov.uk/government/organisations/department-for-work-pensions/about/statistics' },
                { name: 'ONS Data', url: 'https://www.ons.gov.uk/' },
                { name: 'Home Office Statistics', url: 'https://www.gov.uk/government/organisations/home-office/about/statistics' },
                { name: 'Stat-Xplore', url: 'https://stat-xplore.dwp.gov.uk/' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gov-light-blue hover:underline inline-flex items-center gap-1"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gov-grey-200">
              <li>
                <Link href="#methodology" className="hover:underline">
                  Methodology & Data Quality
                </Link>
              </li>
              <li>
                <Link href="#limitations" className="hover:underline">
                  Data Limitations
                </Link>
              </li>
              <li>
                <a
                  href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:underline"
                >
                  Open Government Licence
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gov-grey-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <svg
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="h-6 w-6"
            >
              <path
                fill="currentColor"
                d="M24 4l4.5 9.5L40 16l-7.5 7 2 11L24 29l-10.5 5 2-11L8 16l11.5-2.5z"
              />
            </svg>
            <span className="text-sm text-gov-grey-200">
              © UK Statistics Hub. All data © Crown copyright.
            </span>
          </div>
          
          <div className="text-sm text-gov-grey-300">
            Built with Next.js, Tailwind CSS, and shadcn/ui
          </div>
        </div>
      </div>
    </footer>
  );
}
