import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { experience } from '../../data/experience';
import { cn } from '../../utils/cn';
import { easeOut } from '../../utils/motion';

export function Experience() {
  const reduce = useReducedMotion();
  return (
    <section id="experience" aria-labelledby="experience-title" className="relative py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="self-start lg:sticky lg:top-32 lg:col-span-4">
          <SectionHeading
            id="experience-title"
            kicker="experience"
            title="5 years in production."
            highlight={['production']}
            description="Teams across the UAE, Saudi Arabia and Egypt, from agency client work to in-house systems that run daily operations." />
        </div>

        <ol className="relative lg:col-span-8">
          <span aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-px bg-line/10" />
          {experience.map((job, i) =>
          <motion.li
            key={job.id}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: 0.05, ease: easeOut }}
            className={cn('relative pl-10', i < experience.length - 1 && 'pb-12 md:pb-14')}>

              <span
              aria-hidden="true"
              className={cn(
                'absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2',
                job.current ? 'border-accent bg-accent' : 'border-line/30 bg-bg'
              )} />

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted md:text-sm">
                <span className={cn(job.current && 'text-accent-ink')}>{job.period}</span>
                <span aria-hidden="true">·</span>
                <span>{job.location}</span>
              </div>

              <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em] md:text-[1.75rem]">
                {job.company}
              </h3>
              <p className="mt-1 text-base text-fg/80">{job.role}</p>

              <ul className="mt-5 space-y-2.5">
                {job.highlights.map((h) =>
              <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-accent-ink" />
                    <span>{h}</span>
                  </li>
              )}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${job.company} stack`}>
                {job.stack.map((s) =>
              <li
                key={s}
                className="rounded-full border border-line/10 bg-surface/[0.03] px-3 py-1 text-xs text-fg">
                    {s}
                  </li>
              )}
              </ul>
            </motion.li>
          )}
        </ol>
      </div>
    </section>);

}
