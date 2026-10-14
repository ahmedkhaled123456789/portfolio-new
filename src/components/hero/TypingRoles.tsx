import React, { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { roles } from '../../data/hero';

export function TypingRoles({ active }: {active: boolean;}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(reduce ? roles[0] : '');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!active) return;
    const current = roles[index];

    if (reduce) {
      setText(current);
      const t = window.setTimeout(() => setIndex((i) => (i + 1) % roles.length), 2600);
      return () => window.clearTimeout(t);
    }

    let delay = deleting ? 32 : 70;
    if (!deleting && text === current) delay = 1700;
    if (deleting && text === '') delay = 260;

    const t = window.setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      } else {
        setText(current.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => window.clearTimeout(t);
  }, [active, text, deleting, index, reduce]);

  return (
    <p className="flex h-7 items-center font-mono text-sm text-muted md:text-base" aria-label={`Roles: ${roles.join(', ')}`}>
      <span aria-hidden="true" className="flex items-center">
        <span className="text-accent-ink">~/ahmed</span>
        <span className="mx-2 text-muted/70">$</span>
        <span className="text-fg">{text}</span>
        <span className="animate-blink ml-0.5 inline-block h-[1.1em] w-[2px] bg-accent" />
      </span>
    </p>);

}