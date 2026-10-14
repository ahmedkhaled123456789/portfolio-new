import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { easeOut } from '../../utils/motion';

type Tag = 'h1' | 'h2' | 'h3' | 'p';

interface RevealTextProps {
  text: string;
  as?: Tag;
  id?: string;
  className?: string;
  delay?: number;
  /** When provided, controls playback; otherwise plays when scrolled into view. */
  play?: boolean;
  /** Lower-case words (punctuation stripped) to render in the accent color. */
  highlight?: string[];
}

export function RevealText({ text, as: Tag = 'h2', id, className, delay = 0, play, highlight = [] }: RevealTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px 80px 0px' });
  const reduce = useReducedMotion();
  const show = play ?? inView;
  const words = text.split(' ');

  return (
    <Tag id={id} className={className} aria-label={text}>
      <span ref={ref} aria-hidden="true" className="block">
        {words.map((word, i) => {
          const clean = word.replace(/[^\p{L}\p{N}-]/gu, '').toLowerCase();
          return (
            <React.Fragment key={`${word}-${i}`}>
              <span className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-top">
                <motion.span
                  className={cn('inline-block will-change-transform', highlight.includes(clean) && 'text-accent-ink')}
                  initial={reduce ? { opacity: 0 } : { y: '108%' }}
                  animate={show ? reduce ? { opacity: 1 } : { y: '0%' } : undefined}
                  transition={{ duration: 0.3, delay: delay + i * 0.055, ease: easeOut }}>
                  
                  {word}
                </motion.span>
              </span>
              {i < words.length - 1 && ' '}
            </React.Fragment>);

        })}
      </span>
    </Tag>);

}