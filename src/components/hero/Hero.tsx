import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRightIcon, DownloadIcon, PhoneIcon } from 'lucide-react';
import { HeroBackground } from './HeroBackground';
import { HeroVisual } from './HeroVisual';
import { TypingRoles } from './TypingRoles';
import { Button } from '../ui/Button';
import { RevealText } from '../ui/RevealText';
import { SocialLinks } from '../ui/SocialLinks';
import { contact } from '../../data/contact';
import { heroHeadline, heroHighlight, heroIntro, heroStack } from '../../data/hero';
import { easeOut } from '../../utils/motion';
import { scrollToTarget } from '../../utils/scroll';

export function Hero({ ready }: {ready: boolean;}) {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 14 },
    animate: ready ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 0.3, delay, ease: easeOut }
  });

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-24 pt-28 md:pt-32">
      
      <HeroBackground />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <motion.p {...fade(0)} className="flex items-center gap-3 text-sm font-medium text-muted md:text-base">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            {heroIntro}
          </motion.p>

          <RevealText
            as="h1"
            text={heroHeadline}
            play={ready}
            delay={0.08}
            highlight={heroHighlight}
            className="mt-6 font-display text-[clamp(2.6rem,6.2vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.035em]" />
          

          <motion.div {...fade(0.6)} className="mt-7">
            <TypingRoles active={ready} />
          </motion.div>

          <motion.p {...fade(0.66)} className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[15px] text-muted md:text-base">
            {heroStack.map((tech, i) =>
            <React.Fragment key={tech}>
                <span>{tech}</span>
                {i < heroStack.length - 1 &&
              <span aria-hidden="true" className="text-accent-ink">
                    •
                  </span>
              }
              </React.Fragment>
            )}
          </motion.p>

          <motion.div {...fade(0.74)} className="mt-10 flex flex-wrap items-center gap-3">
            <Button href={contact.phoneHref} icon={<PhoneIcon />} ariaLabel={`Call me at ${contact.phone}`}>
              Call Me
            </Button>
            <Button href={contact.cv} download variant="secondary" icon={<DownloadIcon />}>
              Download CV
            </Button>
            <Button href="#projects" variant="ghost" icon={<ArrowDownRightIcon />}>
              View Projects
            </Button>
          </motion.div>

          <motion.div {...fade(0.82)} className="mt-10">
            <SocialLinks />
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <HeroVisual ready={ready} />
        </div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToTarget('#about')}
        aria-label="Scroll to the next section"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : undefined}
        transition={{ duration: 0.3, delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted transition-colors duration-200 hover:text-fg md:flex">
        
        <span className="flex h-9 w-6 justify-center rounded-full border border-line/25 pt-2">
          <span className="animate-scroll-dot h-1.5 w-1 rounded-full bg-accent" />
        </span>
        Scroll
      </motion.button>
    </section>);

}