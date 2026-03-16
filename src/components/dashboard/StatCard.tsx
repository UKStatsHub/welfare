'use client';

import { TrendingUp, TrendingDown, Minus, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StatCardProps {
  id: string;
  title: string;
  value: number | string;
  unit?: string;
  change?: number;
  changeDirection?: 'up' | 'down' | 'neutral';
  changeLabel?: string;
  description?: string;
  source: {
    name: string;
    url: string;
    releaseDate: string;
  };
  lastUpdated: string;
  link?: string;
}

export function StatCard({
  title,
  value,
  unit,
  change,
  changeDirection = 'neutral',
  changeLabel = 'YoY change',
  description,
  source,
  link,
}: StatCardProps) {
  const formatValue = (val: number | string): string => {
    if (typeof val === 'string') return val;
    if (val >= 1000000) return `${(val / 1000000).toFixed(1)}m`;
    if (val >= 1000) return `${(val / 1000).toFixed(0)}k`;
    return val.toLocaleString('en-GB');
  };

  const getChangeColor = () => {
    // For welfare statistics, decrease isn't always good or bad
    // Use neutral coloring with direction indicators
    if (changeDirection === 'up') return 'text-gov-green';
    if (changeDirection === 'down') return 'text-gov-red';
    return 'text-gov-grey-500';
  };

  const getChangeIcon = () => {
    if (changeDirection === 'up') return <TrendingUp className="h-4 w-4" />;
    if (changeDirection === 'down') return <TrendingDown className="h-4 w-4" />;
    return <Minus className="h-4 w-4" />;
  };

  return (
    <Card className="h-full border-l-4 border-l-gov-blue hover:shadow-gov transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-gov-grey-600 leading-tight">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl sm:text-4xl font-bold text-gov-blue">
            {formatValue(value)}
          </span>
          {unit && (
            <span className="text-lg text-gov-grey-500">{unit}</span>
          )}
        </div>
        
        {change !== undefined && (
          <div className={`flex items-center gap-1 mt-2 ${getChangeColor()}`}>
            {getChangeIcon()}
            <span className="font-medium">
              {change > 0 ? '+' : ''}{change.toFixed(1)}%
            </span>
            <span className="text-gov-grey-500 text-sm ml-1">
              {changeLabel}
            </span>
          </div>
        )}
        
        {description && (
          <p className="text-sm text-gov-grey-500 mt-2">
            {description}
          </p>
        )}
        
        <div className="mt-4 pt-3 border-t border-gov-grey-200">
          <a
            href={link || source.url}
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
