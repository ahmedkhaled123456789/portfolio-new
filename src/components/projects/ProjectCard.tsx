 import { ArrowUpRightIcon } from 'lucide-react';
import { DeviceFrame } from '../ui/DeviceFrame';
import { cn } from '../../utils/cn';
import { trackPointer } from '../../utils/pointer';
import type { Project } from '../../types/portfolio';

export function ProjectCard({ project }: {project: Project;}) {
  const isPhone = project.device === 'phone';
  return (
    <article
      onPointerMove={trackPointer}
      className="animated-border group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line/10 bg-surface/[0.03] p-3">
      
      <div
        aria-hidden="true"
        className="spotlight pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
      
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[1.1rem] bg-elevated px-6">
        
        <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_90%,rgb(var(--violet)/0.16),transparent_65%)]" />
        <DeviceFrame
          type={project.device}
          src={project.image}
          alt={`${project.title} screenshot`}
          className={cn(
            'relative transition-transform duration-300 ease-out group-hover:-translate-y-1.5',
            isPhone ? 'h-[86%] w-auto' : 'w-full'
          )} />
        
      </a>
      <div className="relative z-[2] flex flex-1 flex-col px-2 pb-2 pt-5">
        <p className="font-mono text-xs text-muted">
          <span className="text-accent-ink">{project.category}</span> · {project.tag}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.02em]">{project.title}</h3>
        <p className="mt-1.5 text-sm text-muted">{project.description}</p>
        <div className="mt-auto pt-5">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Show ${project.title} live (opens in a new tab)`}
            className="group/link inline-flex h-10 items-center gap-2 rounded-full border border-line/15 bg-surface/[0.04] px-4 text-sm font-medium text-fg transition-[background-color,border-color,color,transform] duration-200 ease-out hover:border-accent/50 hover:bg-accent hover:text-ink active:scale-[0.97]">
            
            {isPhone ? 'View on App Store' : 'Show live'}
            <ArrowUpRightIcon
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 ease-out group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            
          </a>
        </div>
      </div>
    </article>);

}