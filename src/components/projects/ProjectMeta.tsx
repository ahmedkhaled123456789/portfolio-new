import { cn } from '../../utils/cn';
import type { Project } from '../../types/portfolio';

/** Headline number + tech stack under a project's description. Renders nothing when neither is set. */
export function ProjectMeta({ project, className }: {project: Project;className?: string;}) {
  const { metric, stack } = project;
  if (!metric && !stack?.length) return null;
  return (
    <ul className={cn('flex flex-wrap items-center gap-1.5', className)} aria-label={`${project.title} highlights`}>
      {metric &&
      <li className="rounded-full bg-accent/15 px-2.5 py-1 font-mono text-[11px] font-medium text-accent-ink">
          {metric}
        </li>
      }
      {stack?.map((s) =>
      <li key={s} className="rounded-full border border-line/10 px-2.5 py-1 font-mono text-[11px] text-muted">
          {s}
        </li>
      )}
    </ul>);

}

/** Button label that matches where the link actually goes. */
export function projectLinkLabel(project: Project): string {
  if (project.url.includes('apps.apple.com')) return 'View on App Store';
  if (project.url.includes('github.com')) return 'View code';
  return 'Show live';
}
