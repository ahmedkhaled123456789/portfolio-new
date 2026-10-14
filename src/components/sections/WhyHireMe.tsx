import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon, HandshakeIcon, RocketIcon, TimerIcon, UsersIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { reasons } from '../../data/reasons';
import { cn } from '../../utils/cn';
import { easeOut } from '../../utils/motion';
import type { ReasonIcon } from '../../types/portfolio';

const icons: Record<ReasonIcon, React.ComponentType<{className?: string;}>> = {
  solo: RocketIcon,
  team: UsersIcon,
  time: TimerIcon,
  clients: HandshakeIcon
};

export function WhyHireMe() {
  const reduce = useReducedMotion();
  return (
    <section id="why" aria-labelledby="why-title" className="relative py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="self-start lg:sticky lg:top-32 lg:col-span-5">
          <SectionHeading
            id="why-title"
            kicker="why hire me"
            title="From zero to hero, on schedule."
            highlight={['hero']}
            description="Whether it's a brand-new build or an update to something live, I take ownership of the outcome — and keep you in the loop the whole way." />
          
          <Reveal delay={0.15} className="mt-8">
            <Button href="#contact" icon={<ArrowRightIcon />}>
              Start a project
            </Button>
          </Reveal>
        </div>

        <ul className="grid items-start gap-4 sm:grid-cols-2 lg:col-span-7">
          {reasons.map((reason, i) => {
            const Icon = icons[reason.icon];
            return (
              <motion.li
                key={reason.id}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.3, delay: i % 2 * 0.08, ease: easeOut }}
                className={cn(
                  'relative flex flex-col overflow-hidden rounded-3xl border border-line/10 bg-surface/[0.03] p-7 md:p-8',
                  i % 2 === 1 && 'sm:mt-12'
                )}>
                
                <motion.span
                  className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-ink"
                  initial={reduce ? undefined : { rotate: -12, scale: 0.96 }}
                  whileInView={reduce ? undefined : { rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 + i % 2 * 0.08 }}>
                  
                  <Icon className="h-5 w-5" />
                </motion.span>
                <h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.02em]">{reason.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{reason.description}</p>
              </motion.li>);

          })}
        </ul>
      </div>
    </section>);

}