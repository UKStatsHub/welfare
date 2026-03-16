'use client';

import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface BreakdownItem {
  category: string;
  value: number;
  percentage?: number;
  change?: number;
}

interface BreakdownTableProps {
  title: string;
  description?: string;
  dimension: string;
  items: BreakdownItem[];
  source: {
    name: string;
    url: string;
    releaseDate: string;
  };
  showPercentage?: boolean;
  showChange?: boolean;
  maxRows?: number;
}

export function BreakdownTable({
  title,
  description,
  items,
  source,
  showPercentage = true,
  showChange = false,
  maxRows,
}: BreakdownTableProps) {
  const displayItems = maxRows ? items.slice(0, maxRows) : items;
  
  const formatValue = (val: number): string => {
    if (val >= 1000000) return `${(val / 1000000).toFixed(1)}m`;
    if (val >= 1000) return `${(val / 1000).toFixed(0)}k`;
    return val.toLocaleString('en-GB');
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold text-gov-blue">{title}</CardTitle>
        {description && (
          <CardDescription className="text-sm text-gov-grey-500">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b-2 border-gov-grey-300">
                <TableHead className="text-left font-bold text-gov-grey-700">Category</TableHead>
                <TableHead className="text-right font-bold text-gov-grey-700">Value</TableHead>
                {showPercentage && (
                  <TableHead className="text-right font-bold text-gov-grey-700">%</TableHead>
                )}
                {showChange && (
                  <TableHead className="text-right font-bold text-gov-grey-700">Change</TableHead>
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayItems.map((item, index) => (
                <TableRow key={index} className="border-b border-gov-grey-200">
                  <TableCell className="font-medium text-gov-grey-800">
                    {item.category}
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {formatValue(item.value)}
                  </TableCell>
                  {showPercentage && item.percentage !== undefined && (
                    <TableCell className="text-right text-gov-grey-600">
                      {item.percentage.toFixed(1)}%
                    </TableCell>
                  )}
                  {showChange && item.change !== undefined && (
                    <TableCell className={`text-right font-medium ${item.change >= 0 ? 'text-gov-green' : 'text-gov-red'}`}>
                      {item.change >= 0 ? '+' : ''}{item.change.toFixed(1)}%
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {maxRows && items.length > maxRows && (
          <p className="text-sm text-gov-grey-500 mt-2 italic">
            Showing top {maxRows} of {items.length} categories
          </p>
        )}
        
        <div className="mt-4 pt-3 border-t border-gov-grey-200">
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gov-grey-500 hover:text-gov-blue inline-flex items-center gap-1"
          >
            Source: {source.name} ({source.releaseDate})
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
