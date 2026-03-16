'use client';

import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface ChartCardProps {
  id: string;
  title: string;
  description?: string;
  data: Array<{
    date: string;
    value: number;
    label?: string;
    [key: string]: string | number | undefined;
  }>;
  chartType: 'line' | 'bar' | 'area' | 'pie';
  source: {
    name: string;
    url: string;
    releaseDate: string;
  };
  lastUpdated: string;
  yAxisLabel?: string;
  xAxisLabel?: string;
  height?: number;
  showLegend?: boolean;
  colors?: string[];
}

const GOV_COLORS = [
  '#003087', // gov-blue
  '#00703C', // gov-green
  '#D4351C', // gov-red
  '#F47738', // gov-orange
  '#5694CA', // gov-light-blue
  '#4C2C92', // gov-purple
  '#FFDD00', // gov-yellow
];

export function ChartCard({
  title,
  description,
  data,
  chartType,
  source,
  yAxisLabel,
  xAxisLabel,
  height = 300,
  showLegend = false,
  colors = GOV_COLORS,
}: ChartCardProps) {
  const formatYAxis = (value: number): string => {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}m`;
    if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
    return value.toString();
  };

  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#DEE0E2" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 11, fill: '#505A5F' }}
                tickLine={{ stroke: '#B1B4B6' }}
                axisLine={{ stroke: '#B1B4B6' }}
              />
              <YAxis
                tick={{ fontSize: 11, fill: '#505A5F' }}
                tickLine={{ stroke: '#B1B4B6' }}
                axisLine={{ stroke: '#B1B4B6' }}
                tickFormatter={formatYAxis}
                label={yAxisLabel ? { value: yAxisLabel, angle: -90, position: 'insideLeft', style: { fontSize: 11, fill: '#505A5F' } } : undefined}
              />
              <Tooltip
                formatter={(value: number) => [value.toLocaleString('en-GB'), 'Value']}
                contentStyle={{ backgroundColor: 'white', border: '1px solid #DEE0E2' }}
              />
              {showLegend && <Legend />}
              <Line
                type="monotone"
                dataKey="value"
                stroke={colors[0]}
                strokeWidth={2}
                dot={{ fill: colors[0], strokeWidth: 2 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        );

      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <BarChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#DEE0E2" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 11, fill: '#505A5F' }}
                tickLine={{ stroke: '#B1B4B6' }}
                axisLine={{ stroke: '#B1B4B6' }}
              />
              <YAxis
                tick={{ fontSize: 11, fill: '#505A5F' }}
                tickLine={{ stroke: '#B1B4B6' }}
                axisLine={{ stroke: '#B1B4B6' }}
                tickFormatter={formatYAxis}
              />
              <Tooltip
                formatter={(value: number) => [value.toLocaleString('en-GB'), 'Value']}
                contentStyle={{ backgroundColor: 'white', border: '1px solid #DEE0E2' }}
              />
              {showLegend && <Legend />}
              <Bar dataKey="value" fill={colors[0]} />
            </BarChart>
          </ResponsiveContainer>
        );

      case 'area':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <AreaChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#DEE0E2" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 11, fill: '#505A5F' }}
                tickLine={{ stroke: '#B1B4B6' }}
                axisLine={{ stroke: '#B1B4B6' }}
              />
              <YAxis
                tick={{ fontSize: 11, fill: '#505A5F' }}
                tickLine={{ stroke: '#B1B4B6' }}
                axisLine={{ stroke: '#B1B4B6' }}
                tickFormatter={formatYAxis}
              />
              <Tooltip
                formatter={(value: number) => [value.toLocaleString('en-GB'), 'Value']}
                contentStyle={{ backgroundColor: 'white', border: '1px solid #DEE0E2' }}
              />
              {showLegend && <Legend />}
              <Area
                type="monotone"
                dataKey="value"
                stroke={colors[0]}
                fill={colors[0]}
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        );

      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={({ category, percentage }) => `${category}: ${percentage}%`}
                outerRadius={100}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => value.toLocaleString('en-GB')}
                contentStyle={{ backgroundColor: 'white', border: '1px solid #DEE0E2' }}
              />
            </PieChart>
          </ResponsiveContainer>
        );

      default:
        return null;
    }
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
        {renderChart()}
        
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
