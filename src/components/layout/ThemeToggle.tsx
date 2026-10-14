import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { easeOut } from '../../utils/motion';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-line/10 bg-surface/[0.04] text-fg transition-[background-color,border-color,transform] duration-200 ease-out hover:border-line/25 hover:bg-surface/[0.08] active:scale-95">
      
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 14, opacity: 0, rotate: -60 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -14, opacity: 0, rotate: 60 }}
          transition={{ duration: 0.18, ease: easeOut }}
          className="inline-flex">
          
          {isDark ? <MoonIcon className="h-[18px] w-[18px]" /> : <SunIcon className="h-[18px] w-[18px]" />}
        </motion.span>
      </AnimatePresence>
    </button>);

}