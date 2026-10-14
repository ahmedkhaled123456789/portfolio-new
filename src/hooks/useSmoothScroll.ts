import { useEffect } from 'react';
import Lenis from 'lenis';
import { setLenis } from '../utils/scroll';

// Exponential ease-out: quick response, long soft settle.
export const expoOut = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export function useSmoothScroll(enabled: boolean): void {
  useEffect(() => {
    if (!enabled) return;
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.15,
      easing: expoOut,
      smoothWheel: true,
      wheelMultiplier: 1,
      // Keep native touch scrolling on phones: it already has momentum and is cheaper.
      syncTouch: false,
      touchMultiplier: 1.5,
      allowNestedScroll: true,
      stopInertiaOnNavigate: true
    });
    setLenis(lenis);
    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, [enabled]);
}
