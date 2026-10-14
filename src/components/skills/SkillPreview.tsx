import React from 'react';
import type { SkillId } from '../../types/portfolio';

export function SkillPreview({ id }: {id: SkillId;}) {
  if (id === 'frontend') {
    return (
      <div className="relative mt-6 overflow-hidden rounded-2xl border border-line/10 bg-bg/60">
        <div className="flex items-center gap-1.5 border-b border-line/10 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-line/20" />
          <span className="h-2 w-2 rounded-full bg-line/20" />
          <span className="h-2 w-2 rounded-full bg-line/20" />
          <span className="ml-2 font-mono text-[11px] text-muted">ProductCard.tsx</span>
        </div>
        <pre className="overflow-x-auto px-4 py-4 font-mono text-xs leading-[1.75] text-muted">
          <code>
            <span className="text-violet">export function</span> <span className="text-fg">ProductCard</span>() {'{'}
            {'\n'}
            {'  '}
            <span className="text-violet">return</span> ({'\n'}
            {'    '}&lt;<span className="text-accent-ink">Card</span> <span className="text-fg">fast</span>{' '}
            <span className="text-fg">accessible</span>&gt;{'\n'}
            {'      '}&lt;<span className="text-accent-ink">Image</span> <span className="text-fg">priority</span> /&gt;
            {'\n'}
            {'      '}&lt;<span className="text-accent-ink">Price</span> <span className="text-fg">value</span>=
            <span className="text-success">{'{99}'}</span> /&gt;{'\n'}
            {'    '}&lt;/<span className="text-accent-ink">Card</span>&gt;{'\n'}
            {'  '});{'\n'}
            {'}'}
          </code>
        </pre>
      </div>);

  }

  if (id === 'backend') {
    return (
      <div className="relative mt-6 space-y-1.5 rounded-2xl border border-line/10 bg-bg/60 px-4 py-3 font-mono text-xs">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="rounded bg-success/15 px-1.5 py-0.5 text-success">GET</span>
          <span className="text-fg">/api/v1/projects</span>
          <span className="ml-auto text-muted">200 OK · 38ms</span>
        </p>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="rounded bg-accent/15 px-1.5 py-0.5 text-accent-ink">POST</span>
          <span className="text-fg">/auth/login</span>
          <span className="ml-auto text-muted">201 · JWT issued</span>
        </p>
      </div>);

  }

  return null;
}