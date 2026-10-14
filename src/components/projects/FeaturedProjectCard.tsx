import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { DeviceFrame } from '../ui/DeviceFrame';
import { cn } from '../../utils/cn';
import { trackPointer } from '../../utils/pointer';
import type { Project } from '../../types/portfolio';

export function FeaturedProjectCard({ project, className }: {project: Project;className?: string;}) {
  return (
    <article
      onPointerMove={trackPointer}
      className={cn(
        'animated-border group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line/10 bg-surface/[0.03] p-3 md:p-4',
        className
      )}>
      
      <div
        aria-hidden="true"
        className="spotlight pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
      
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="relative flex h-60 items-end justify-center overflow-hidden rounded-[1.25rem] bg-elevated px-6 sm:h-72 md:h-80 md:px-10">
        
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-[radial-gradient(ellipse_at_50%_100%,rgb(var(--accent)/0.22),rgb(var(--violet)/0.12)_45%,transparent_72%)]" />
        <DeviceFrame
          type={project.device}
          src={project.image}
          alt={`${project.title} website screenshot`}
          className="relative w-full max-w-[34rem] translate-y-[14%] transition-transform duration-300 ease-out group-hover:translate-y-[10%]" />
        
      </a>
      <div className="relative z-[2] flex flex-1 flex-col gap-5 px-2 pb-2 pt-6 sm:flex-row sm:items-end sm:justify-between md:px-3">
        <div>
          <p className="font-mono text-xs text-muted">
            <span className="text-accent-ink">{project.category}</span> · {project.tag}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.02em] md:text-3xl">{project.title}</h3>
          <p className="mt-2 max-w-md text-sm text-muted">{project.description}</p>
        </div>
        <Button
          href={project.url}
          external
          size="md"
          variant="secondary"
          icon={<ArrowUpRightIcon />}
          ariaLabel={`Show ${project.title} live (opens in a new tab)`}
          wrapperClassName="shrink-0">
          
          Show live
        </Button>
      </div>
    </article>);

}