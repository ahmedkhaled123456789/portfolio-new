import { useEffect, useState } from 'react';

export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    const observed = new Set<string>();
    const attach = () => {
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && !observed.has(id)) {
          observer.observe(el);
          observed.add(id);
        }
      });
      if (observed.size === ids.length) window.clearInterval(timer);
    };
    // Sections below the fold are code-split, so keep looking until they mount.
    const timer = window.setInterval(attach, 500);
    attach();
    return () => {
      window.clearInterval(timer);
      observer.disconnect();
    };
  }, [ids]);

  return active;
}