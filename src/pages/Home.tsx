import React, { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import { AnimatePresence, useReducedMotion } from 'framer-motion';
import { Loader } from '../components/layout/Loader';
import { Navbar } from '../components/layout/Navbar';
import { ScrollProgress } from '../components/layout/ScrollProgress';
import { Hero } from '../components/hero/Hero';
import { AboutStrip } from '../components/sections/AboutStrip';
import { Skills } from '../components/skills/Skills';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { useSeo } from '../hooks/useSeo';
import { pauseScroll } from '../utils/scroll';
import { preloadAllImages, preloadFullScreenshots } from '../utils/preload';

const Projects = lazy(() => import('../components/projects/Projects').then((m) => ({ default: m.Projects })));
const WhyHireMe = lazy(() => import('../components/sections/WhyHireMe').then((m) => ({ default: m.WhyHireMe })));
const CTABanner = lazy(() => import('../components/sections/CTABanner').then((m) => ({ default: m.CTABanner })));
const Footer = lazy(() => import('../components/layout/Footer').then((m) => ({ default: m.Footer })));

export function Home() {
  const reduce = useReducedMotion();
  // The loader stays up until its intro has played AND every image is in the cache.
  const [introDone, setIntroDone] = useState(false);
  const [imagesReady, setImagesReady] = useState(false);
  const loaded = introDone && imagesReady;
  const handleLoaded = useCallback(() => setIntroDone(true), []);

  useEffect(() => {
    preloadAllImages().then(() => setImagesReady(true));
  }, []);

  useSmoothScroll(!reduce);
  useSeo();

  useEffect(() => {
    document.documentElement.style.overflow = loaded ? '' : 'hidden';
    pauseScroll(!loaded);
    // Heavy hover screenshots download only once the page is on screen.
    if (loaded) preloadFullScreenshots();
  }, [loaded]);

  return (
    <div className="relative min-h-screen w-full overflow-x-clip bg-bg text-fg">
      <a
        href="#main"
        className="sr-only z-[110] rounded-full bg-accent px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        
        Skip to content
      </a>
      <AnimatePresence>{!loaded && <Loader key="loader" onDone={handleLoaded} />}</AnimatePresence>
      <ScrollProgress />
      <div className="noise" aria-hidden="true" />
      <Navbar />
      <main id="main">
        <Hero ready={loaded} />
        <AboutStrip />
        <Skills />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Projects />
          <WhyHireMe />
          <CTABanner />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>);

}