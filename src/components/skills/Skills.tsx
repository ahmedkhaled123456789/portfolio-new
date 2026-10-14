import React from 'react';
import { SkillCard } from './SkillCard';
import { TechMarquee } from './TechMarquee';
import { SectionHeading } from '../ui/SectionHeading';
import { skillGroups } from '../../data/skills';
import type { SkillId } from '../../types/portfolio';

const spans: Partial<Record<SkillId, string>> = {
  frontend: 'md:col-span-2 lg:col-span-2 lg:row-span-2',
  backend: 'md:col-span-2 lg:col-span-2'
};

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="skills-title"
          kicker="skills & experience"
          title="A full-stack toolkit, end to end."
          highlight={['end']}
          description="One engineer across the interface, the API, the database and the automations that tie them together." />
        
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) =>
          <SkillCard key={group.id} group={group} index={i} large={group.id === 'frontend'} className={spans[group.id]} />
          )}
        </div>
      </div>
      <TechMarquee />
    </section>);

}