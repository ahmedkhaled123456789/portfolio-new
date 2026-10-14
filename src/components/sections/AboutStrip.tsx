 import { Counter } from '../ui/Counter';
import { Reveal } from '../ui/Reveal';
import { RevealText } from '../ui/RevealText';
import { capabilities, primaryStat, secondaryStats } from '../../data/stats';

export function AboutStrip() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="font-mono text-xs text-accent-ink md:text-sm">
              <span aria-hidden="true">/ </span>about
            </p>
          </Reveal>
          <RevealText
            as="h2"
            id="about-title"
            text="I turn ideas into production-ready products across web, mobile and automation."
            highlight={['production-ready']}
            className="mt-4 font-display text-[clamp(1.9rem,3.6vw,3.1rem)] font-semibold leading-[1.08] tracking-[-0.025em]" />
          
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              From the first wireframe to the final deploy, I own the whole stack — so products ship faster, perform
              better and stay easy to grow.
            </p>
          </Reveal>
        </div>

        <dl className="grid grid-cols-2 gap-x-8 lg:col-span-6 lg:pl-8">
          <Reveal className="col-span-2 border-b border-line/10 pb-8">
            <dt className="sr-only">{primaryStat.label}</dt>
            <dd>
              <Counter
                value={primaryStat.value}
                suffix={primaryStat.suffix}
                className="block font-display text-[clamp(4.5rem,10vw,8rem)] font-semibold leading-none tracking-[-0.04em] text-accent-ink" />
              
              <p aria-hidden="true" className="mt-3 max-w-sm text-base text-muted">
                {primaryStat.label}
              </p>
            </dd>
          </Reveal>
          {secondaryStats.map((stat, i) =>
          <Reveal key={stat.label} delay={0.08 + i * 0.06} className="pt-8">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <Counter
                value={stat.value}
                suffix={stat.suffix}
                className="block font-display text-4xl font-semibold tracking-[-0.03em] md:text-5xl" />
              
                <p aria-hidden="true" className="mt-2 text-sm text-muted">
                  {stat.label}
                </p>
              </dd>
            </Reveal>
          )}
          <Reveal delay={0.2} className="col-span-2 mt-10">
            <dt className="sr-only">Capabilities</dt>
            <dd className="flex flex-wrap gap-2">
              {capabilities.map((c, i) =>
              <span
                key={c}
                className={
                i === 0 ?
                'rounded-full bg-accent px-3.5 py-1.5 text-sm font-medium text-ink' :
                'rounded-full border border-line/10 bg-surface/[0.03] px-3.5 py-1.5 text-sm text-fg'
                }>
                
                  {c}
                </span>
              )}
            </dd>
          </Reveal>
        </dl>
      </div>
    </section>);

}