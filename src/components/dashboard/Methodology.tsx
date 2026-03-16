'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Info, AlertTriangle, BookOpen } from 'lucide-react';

interface TermDefinition {
  term: string;
  definition: string;
}

interface MethodologySectionProps {
  definitions?: TermDefinition[];
  dataQualityNotes?: string[];
  coverage?: string;
}

export function MethodologySection({
  definitions = [],
  dataQualityNotes = [],
  coverage,
}: MethodologySectionProps) {
  const defaultDefinitions: TermDefinition[] = [
    {
      term: 'Universal Credit',
      definition: 'A means-tested benefit for working-age people who are on a low income or out of work. It replaces six legacy benefits including Jobseeker\'s Allowance, Employment and Support Allowance, and Housing Benefit.',
    },
    {
      term: 'PIP (Personal Independence Payment)',
      definition: 'A tax-free benefit for people aged 16 to State Pension age who have a long-term physical or mental health condition or disability. It helps with the extra costs caused by long-term ill-health or disability.',
    },
    {
      term: 'ESA (Employment and Support Allowance)',
      definition: 'A benefit for people of working age who are unable to work due to illness or disability. Being replaced by Universal Credit for new claims.',
    },
    {
      term: 'Households Below Average Income (HBAI)',
      definition: 'The official UK poverty statistics, based on the Family Resources Survey. Measures relative and absolute poverty, before and after housing costs.',
    },
    {
      term: 'Relative Poverty',
      definition: 'When a household\'s income is below 60% of the median household income in the current year. This measure compares households to contemporary living standards.',
    },
    {
      term: 'Section 95 Support',
      definition: 'Support provided to asylum seekers who would otherwise be destitute while their claim is being processed. Includes accommodation and/or financial support.',
    },
    {
      term: 'Adult Social Care',
      definition: 'Support provided by local authorities to adults with physical or mental health needs, including personal care, practical assistance, and residential/nursing care.',
    },
  ];

  const defaultNotes = [
    'All figures are rounded to the nearest thousand or percentage point.',
    'Geographic coverage varies by dataset - most cover Great Britain or the United Kingdom. Check individual sources for specific coverage.',
    'Time series data may include breaks where methodology has changed.',
    'Some breakdowns (e.g., by ethnicity, disability status) may have small sample sizes and should be interpreted with caution.',
    'Welfare reforms and policy changes affect comparability over time.',
    'Devolved nations have different welfare systems - Scottish benefits are marked separately.',
  ];

  const displayDefinitions = definitions.length > 0 ? definitions : defaultDefinitions;
  const displayNotes = dataQualityNotes.length > 0 ? dataQualityNotes : defaultNotes;

  return (
    <section id="methodology" className="bg-gov-grey-50 py-12 border-t border-gov-grey-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border-l-4 border-l-gov-blue pl-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gov-blue">
            Sources & Methodology
          </h2>
          <p className="text-gov-grey-600 mt-2">
            Information about data sources, definitions, and quality considerations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Definitions */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg text-gov-blue">
                <BookOpen className="h-5 w-5" />
                Key Definitions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {displayDefinitions.map((item, index) => (
                  <AccordionItem key={index} value={`def-${index}`}>
                    <AccordionTrigger className="text-left font-medium text-gov-grey-800 hover:text-gov-blue">
                      {item.term}
                    </AccordionTrigger>
                    <AccordionContent className="text-gov-grey-600">
                      {item.definition}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Data Quality */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg text-gov-blue">
                <AlertTriangle className="h-5 w-5" />
                Data Quality Notes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {displayNotes.map((note, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Info className="h-4 w-4 text-gov-light-blue mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gov-grey-600">{note}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Coverage Notice */}
        {coverage && (
          <Card className="mt-6 border-gov-orange/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-gov-orange flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gov-grey-800 mb-1">Coverage Note</h3>
                  <p className="text-sm text-gov-grey-600">{coverage}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="mt-8 p-4 bg-gov-blue/5 border border-gov-blue/20 rounded">
          <h3 className="font-medium text-gov-blue mb-2">Data Sources</h3>
          <p className="text-sm text-gov-grey-600 mb-3">
            This dashboard compiles data from the following official sources:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            {[
              { name: 'Department for Work and Pensions (DWP)', url: 'https://www.gov.uk/government/organisations/department-for-work-pensions/about/statistics' },
              { name: 'Office for National Statistics (ONS)', url: 'https://www.ons.gov.uk/' },
              { name: 'Home Office', url: 'https://www.gov.uk/government/organisations/home-office/about/statistics' },
              { name: 'Department of Health and Social Care (DHSC)', url: 'https://www.gov.uk/government/organisations/department-of-health-and-social-care' },
              { name: 'HM Revenue and Customs (HMRC)', url: 'https://www.gov.uk/government/organisations/hm-revenue-customs/about/statistics' },
              { name: 'Social Security Scotland', url: 'https://www.socialsecurity.gov.scot/about-statistics' },
            ].map((source) => (
              <a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gov-blue hover:underline"
              >
                {source.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
