import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { easeInOut, easeOut } from '../../utils/motion';

const strokes = [
'M8 92 L42 8 L76 92',
'M22 60 L62 60',
'M102 8 L102 92',
'M152 8 L102 58',
'M118 42 L158 92'];


export function Loader({ onDone }: {onDone: () => void;}) {
  const reduce = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(onDone, reduce ? 200 : 1450);
    return () => window.clearTimeout(timer);
  }, [onDone, reduce]);

  return (
    <motion.div
      role="status"
      aria-label="Loading Ahmed Khaled's portfolio"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
      exit={reduce ? { opacity: 0 } : { y: '-100%' }}
      transition={{ duration: 0.3, ease: easeInOut }}>
      
      <svg
        viewBox="0 0 166 100"
        fill="none"
        stroke="rgb(var(--accent))"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-16 w-auto md:h-20"
        aria-hidden="true">
        
        {strokes.map((d, i) =>
        <motion.path
          key={d}
          d={d}
          initial={{ pathLength: reduce ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: 0.1 + i * 0.15, ease: easeOut }} />

        )}
      </svg>
      <motion.p
        className="mt-6 font-mono text-xs text-muted"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.85, ease: easeOut }}>
        
        Ahmed Khaled — Full Stack Engineer
      </motion.p>
      <div className="mt-5 h-px w-40 overflow-hidden bg-line/10">
        <motion.div
          className="h-full origin-left bg-accent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.3, ease: 'linear' }} />
        
      </div>
    </motion.div>);

}