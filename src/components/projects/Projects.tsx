import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FeaturedProjectCard } from './FeaturedProjectCard';
import { ProjectCard } from './ProjectCard';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { projects } from '../../data/projects';
import { cn } from '../../utils/cn';
import { easeOut } from '../../utils/motion';
import type { ProjectCategory } from '../../types/portfolio';

type Filter = 'All' | ProjectCategory;
const filters: Filter[] = ['All', 'Web', 'Mobile', 'E-commerce', 'Platform'];
const featuredSpans = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-5', 'lg:col-span-7'];

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All');
  const featured = projects.filter((p) => p.featured);
  const grid = filter === 'All' ? projects.filter((p) => !p.featured) : projects.filter((p) => p.category === filter);
  const countFor = (f: Filter) => f === 'All' ? projects.length : projects.filter((p) => p.category === f).length;

  return (
    <section id="projects" aria-labelledby="projects-title" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="projects-title"
            kicker="selected work"
            title="Latest Works in Design and Web"
            highlight={['web']} />
          
          <Reveal delay={0.1}>
            <div
              role="group"
              aria-label="Filter projects by type"
              className="-mx-1 flex gap-1 overflow-x-auto rounded-full border border-line/10 bg-surface/[0.03] p-1">
              
              {filters.map((f) => {
                const isActive = filter === f;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFilter(f)}
                    aria-pressed={isActive}
                    className={cn(
                      'relative isolate flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ease-out',
                      isActive ? 'text-ink' : 'text-muted hover:text-fg'
                    )}>
                    
                    {isActive &&
                    <motion.span
                      layoutId="filter-pill"
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 rounded-full bg-accent"
                      transition={{ type: 'spring', stiffness: 420, damping: 36 }} />

                    }
                    {f}
                    <span className={cn('text-xs tabular-nums', isActive ? 'text-ink/70' : 'text-muted/70')}>
                      {countFor(f)}
                    </span>
                  </button>);

              })}
            </div>
          </Reveal>
        </div>

        <AnimatePresence initial={false}>
          {filter === 'All' &&
          <motion.ul
            key="featured"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: easeOut }}
            className="mt-14 grid gap-5 lg:grid-cols-12"
            aria-label="Featured projects">
            
              {featured.map((project, i) =>
            <motion.li
              key={project.id}
              className={featuredSpans[i % featuredSpans.length]}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.3, delay: i % 2 * 0.08, ease: easeOut }}>
              
                  <FeaturedProjectCard project={project} />
                </motion.li>
            )}
            </motion.ul>
          }
        </AnimatePresence>

        <motion.ul layout className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-label={`${filter} projects`}>
          <AnimatePresence mode="popLayout" initial={false}>
            {grid.map((project, i) =>
            <motion.li
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              viewport={{ once: true, margin: '0px 0px 80px 0px' }}
              transition={{ duration: 0.3, delay: Math.min(i % 3 * 0.05, 0.15), ease: easeOut }}>
              
                <ProjectCard project={project} />
              </motion.li>
            )}
          </AnimatePresence>
        </motion.ul>

        {grid.length === 0 &&
        <p className="mt-10 rounded-3xl border border-dashed border-line/15 py-16 text-center text-muted">
            No projects in this category yet.
          </p>
        }
      </div>
    </section>);

}