import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { TechLogo } from '../ui/TechLogo';
import { floatingTechs, portrait } from '../../data/hero';
import { easeOut } from '../../utils/motion';

const badgePositions = [
'right-[-4%] top-[8%]',
'left-[14%] top-[-5%]',
'right-[-7%] top-[44%]',
'bottom-[-4%] right-[18%]'];


export function HeroVisual({ ready }: {ready: boolean;}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yPortrait = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -50]);
  const yCode = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -130]);
  const yOrb = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);

  const enter = (delay: number) => ({
    initial: { opacity: 0, scale: 0.96 },
    animate: ready ? { opacity: 1, scale: 1 } : undefined,
    transition: { duration: 0.3, delay, ease: easeOut }
  });

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[24rem] sm:max-w-[26rem] lg:mr-0 lg:max-w-[28rem]">
      <motion.div
        aria-hidden="true"
        style={{ y: yOrb }}
        className="absolute -inset-[18%] -z-10 rounded-full bg-[radial-gradient(circle_at_38%_38%,rgb(var(--accent)/0.32),transparent_52%),radial-gradient(circle_at_64%_66%,rgb(var(--violet)/0.45),transparent_55%)] blur-2xl" />
      

      <motion.div style={{ y: yPortrait }} {...enter(0.25)}>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line/10 bg-elevated shadow-[0_40px_80px_-30px_rgb(0_0_0/0.7)]">
          <img
            src={portrait.src}
            alt={portrait.alt}
            width={928}
            height={1152}
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover" />
          
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(to_top,rgb(7_7_10/0.8),transparent)]" />
          <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-success/70" />
              <span className="relative h-2 w-2 rounded-full bg-success" />
            </span>
            Open to new projects
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ y: yCode }}
        {...enter(0.45)}
        className="absolute -left-4 bottom-[12%] w-[15rem] sm:-left-12 sm:w-[17rem]">
        
        <div className="overflow-hidden rounded-2xl border border-line/10 bg-elevated/85 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.6)] backdrop-blur-xl">
          <div className="flex items-center gap-1.5 border-b border-line/10 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-2 font-mono text-[11px] text-muted">ahmed.ts</span>
          </div>
          <pre className="overflow-hidden px-4 py-3 font-mono text-[11px] leading-[1.7] sm:text-xs" aria-label="Code snippet describing Ahmed">
            <code>
              <span className="text-violet">const</span> <span className="text-fg">engineer</span>{' '}
              <span className="text-muted">=</span> {'{'}
              {'\n'}
              {'  '}
              <span className="text-muted">name:</span> <span className="text-accent-ink">'Ahmed Khaled'</span>,{'\n'}
              {'  '}
              <span className="text-muted">stack:</span> [<span className="text-accent-ink">'React'</span>,{' '}
              <span className="text-accent-ink">'Node'</span>],{'\n'}
              {'  '}
              <span className="text-muted">ships:</span> <span className="text-success">fast</span> &&{' '}
              <span className="text-success">beautiful</span>,{'\n'}
              {'}'};
            </code>
          </pre>
        </div>
      </motion.div>

      {floatingTechs.map((tech, i) =>
      <motion.div key={tech.slug} {...enter(0.55 + i * 0.06)} className={`absolute ${badgePositions[i]}`}>
          <div
          className="animate-float grid h-12 w-12 place-items-center rounded-2xl border border-line/10 bg-elevated/80 shadow-[0_16px_40px_-16px_rgb(0_0_0/0.6)] backdrop-blur-xl sm:h-14 sm:w-14"
          style={{ animationDelay: `${-i * 1.4}s` }}
          title={tech.name}>
          
            <TechLogo tech={tech} size={24} />
          </div>
        </motion.div>
      )}
    </div>);

}