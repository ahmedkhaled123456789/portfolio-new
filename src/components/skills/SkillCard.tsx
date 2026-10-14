import React, { useRef } from 'react';
import { motion, useReducedMotion, useSpring } from 'framer-motion';
import {
  BlocksIcon,
  DatabaseIcon,
  GaugeIcon,
  LayoutTemplateIcon,
  PanelsTopLeftIcon,
  ServerIcon,
  WorkflowIcon,
  WrenchIcon } from
'lucide-react';
import { SkillPreview } from './SkillPreview';
import { cn } from '../../utils/cn';
import { easeOut } from '../../utils/motion';
import type { SkillGroup, SkillId } from '../../types/portfolio';

const icons: Record<SkillId, React.ComponentType<{className?: string;}>> = {
  frontend: LayoutTemplateIcon,
  backend: ServerIcon,
  automation: WorkflowIcon,
  database: DatabaseIcon,
  cms: PanelsTopLeftIcon,
  performance: GaugeIcon,
  tools: WrenchIcon,
  other: BlocksIcon
};

interface SkillCardProps {
  group: SkillGroup;
  index: number;
  large?: boolean;
  className?: string;
}

export function SkillCard({ group, index, large, className }: SkillCardProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const rotateX = useSpring(0, { stiffness: 220, damping: 22 });
  const rotateY = useSpring(0, { stiffness: 220, damping: 22 });
  const Icon = icons[group.id];

  const handleMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
    if (reduce || e.pointerType !== 'mouse') return;
    const intensity = large ? 4 : 8;
    rotateY.set((px - 0.5) * intensity);
    rotateX.set((0.5 - py) * intensity);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px 80px 0px' }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.35), ease: easeOut }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-3xl border border-line/10 bg-surface/[0.03] p-6 backdrop-blur-sm md:p-7',
        className
      )}>
      
      <div
        aria-hidden="true"
        className="spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
      
      <span
        className={cn(
          'relative grid place-items-center rounded-2xl bg-accent/10 text-accent-ink ring-1 ring-accent/20',
          large ? 'h-14 w-14' : 'h-11 w-11'
        )}>
        
        <Icon className={large ? 'h-6 w-6' : 'h-5 w-5'} />
      </span>
      <h3
        className={cn(
          'relative mt-6 font-display font-semibold tracking-[-0.02em]',
          large ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
        )}>
        
        {group.title}
      </h3>
      <p className={cn('relative mt-2 text-muted', large ? 'max-w-md text-base' : 'text-sm')}>{group.summary}</p>
      <SkillPreview id={group.id} />
      <ul className="relative mt-auto flex flex-wrap gap-2 pt-6" aria-label={`${group.title} technologies`}>
        {group.items.map((item) =>
        <li
          key={item}
          className="rounded-full border border-line/10 bg-surface/[0.04] px-3 py-1 text-xs font-medium text-fg">
          
            {item}
          </li>
        )}
      </ul>
    </motion.article>);

}