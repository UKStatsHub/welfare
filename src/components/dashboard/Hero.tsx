'use client';

interface HeroProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
}

export function Hero({ title, subtitle, lastUpdated }: HeroProps) {
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
    <section className="bg-gov-blue text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gov-grey-100 mb-6 max-w-3xl">
          {subtitle}
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="bg-white/10 px-4 py-2 rounded">
            <span className="text-gov-grey-200">Last updated:</span>{' '}
            <span className="font-medium">{formatDate(lastUpdated)}</span>
          </div>
          <div className="bg-gov-green px-4 py-2 rounded">
            <span className="font-medium">Data updated daily from government sources</span>
          </div>
        </div>
      </div>
    </section>
  );
}
