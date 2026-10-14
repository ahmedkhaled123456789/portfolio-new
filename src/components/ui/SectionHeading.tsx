import React from 'react';
import { Reveal } from './Reveal';
import { RevealText } from './RevealText';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  id: string;
  kicker: string;
  title: string;
  description?: string;
  highlight?: string[];
  className?: string;
}

export function SectionHeading({ id, kicker, title, description, highlight, className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', className)}>
      <Reveal>
        <p className="font-mono text-xs text-accent-ink md:text-sm">
          <span aria-hidden="true">/ </span>
          {kicker}
        </p>
      </Reveal>
      <RevealText
        as="h2"
        id={id}
        text={title}
        highlight={highlight}
        className="mt-4 font-display text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.03em]" />
      
      {description &&
      <Reveal delay={0.12}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{description}</p>
        </Reveal>
      }
    </div>);

}