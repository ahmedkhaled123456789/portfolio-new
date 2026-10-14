import React from 'react';
import { ArrowUpRightIcon, PhoneIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { RevealText } from '../ui/RevealText';
import { WhatsappIcon } from '../ui/BrandIcons';
import { contact } from '../../data/contact';

export function CTABanner() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-3 py-20 sm:px-5 md:py-28">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-line/10 bg-elevated px-6 py-16 sm:px-12 md:rounded-[2.5rem] md:py-24 lg:px-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="animate-drift-a absolute -left-[10%] -top-[40%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgb(var(--accent)/0.35),transparent_62%)]" />
          <div className="animate-drift-b absolute -bottom-[45%] right-[-10%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgb(var(--violet)/0.4),transparent_62%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(var(--line)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--line)/0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />
        </div>

        <div className="max-w-4xl">
          <Reveal>
            <p className="font-mono text-xs text-accent-ink md:text-sm">
              <span aria-hidden="true">/ </span>let&apos;s build
            </p>
          </Reveal>
          <RevealText
            as="h2"
            id="contact-title"
            text="Interested in working with me?"
            highlight={['working']}
            className="mt-5 font-display text-[clamp(2.6rem,7vw,6.25rem)] font-semibold leading-[0.98] tracking-[-0.035em]" />
          
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Tell me about your product — a new build, a redesign or an automation. I usually reply within a day.
            </p>
          </Reveal>
          <Reveal delay={0.18} className="mt-10 flex flex-wrap items-center gap-3">
            <Button href={contact.github} external icon={<ArrowUpRightIcon />}>
              See more projects
            </Button>
            <Button href={contact.phoneHref} variant="secondary" icon={<PhoneIcon />} ariaLabel={`Phone ${contact.phone}`}>
              Phone
            </Button>
            <Button
              href={contact.whatsapp}
              external
              variant="secondary"
              icon={<WhatsappIcon />}
              ariaLabel="Chat on WhatsApp (opens in a new tab)">
              
              WhatsApp
            </Button>
          </Reveal>
          <Reveal delay={0.24} className="mt-12 border-t border-line/10 pt-8">
            <a
              href={contact.emailHref}
              className="group inline-flex flex-wrap items-baseline gap-x-3 font-display text-xl font-medium tracking-[-0.01em] sm:text-2xl md:text-3xl">
              
              <span className="text-muted">or email</span>
              <span className="relative break-all">
                {contact.email}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
                
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>);

}