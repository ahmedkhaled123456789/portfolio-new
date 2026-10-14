import React from 'react';
import { TechLogo } from '../ui/TechLogo';
import { techs } from '../../data/techs';
import { cn } from '../../utils/cn';
import type { Tech } from '../../types/portfolio';

function Row({ items, reverse }: {items: Tech[];reverse?: boolean;}) {
  return (
    <div className="marquee flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className={cn('flex w-max shrink-0', reverse ? 'animate-marquee-reverse' : 'animate-marquee')}>
        {[0, 1].map((copy) =>
        <ul key={copy} aria-hidden={copy === 1 ? true : undefined} className="flex shrink-0 items-center gap-3 pr-3">
            {items.map((tech) =>
          <li
            key={`${copy}-${tech.slug}`}
            className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-line/10 bg-surface/[0.03] py-2.5 pl-3 pr-4 text-sm font-medium text-fg">
            
                <TechLogo tech={tech} size={18} />
                {tech.name}
              </li>
          )}
          </ul>
        )}
      </div>
    </div>);

}

export function TechMarquee() {
  const half = Math.ceil(techs.length / 2);
  return (
    <div className="mt-16 space-y-3" aria-label="Technologies I work with">
      <Row items={techs.slice(0, half)} />
      <Row items={techs.slice(half)} reverse />
    </div>);

}