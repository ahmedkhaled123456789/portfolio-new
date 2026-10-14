import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { easeOut } from '../../utils/motion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function Reveal({ children, className, delay = 0, y = 20 }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px 80px 0px' }}
      transition={{ duration: 0.3, delay, ease: easeOut }}>
      
      {children}
    </motion.div>);

}