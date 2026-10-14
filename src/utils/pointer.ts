import type React from 'react';

/** Writes the pointer position into --mx / --my so CSS spotlights can follow it without re-rendering. */
export function trackPointer(event: React.PointerEvent<HTMLElement>): void {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${event.clientX - rect.left}px`);
  el.style.setProperty('--my', `${event.clientY - rect.top}px`);
}