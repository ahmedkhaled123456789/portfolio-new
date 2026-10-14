import type Lenis from 'lenis';
import { expoOut } from '../hooks/useSmoothScroll';

let instance: Lenis | null = null;

export function setLenis(lenis: Lenis | null): void {
  instance = lenis;
}

export function pauseScroll(paused: boolean): void {
  if (!instance) return;
  if (paused) instance.stop();else
  instance.start();
}

export function scrollToTarget(target: string | number): void {
  if (instance) {
    instance.scrollTo(target, { offset: typeof target === 'string' ? -80 : 0, duration: 1.4, easing: expoOut });
    return;
  }
  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' });
    return;
  }
  document.querySelector(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}