import { projects } from '../data/projects';
import { techs } from '../data/techs';
import { floatingTechs, portrait } from '../data/hero';
import type { Tech } from '../types/portfolio';

export function techLogoUrl(tech: Tech, theme: string): string {
  const color = tech.mono ? theme === 'light' ? '111111' : 'ffffff' : tech.color;
  // Self-hosted copies of the Simple Icons SVGs (public/logos) — no third-party round trip.
  return `/logos/${tech.slug}-${color.toLowerCase()}.svg`;
}

/** Light top-of-page crop shown in the card; the full-page screenshot swaps in once it has loaded. */
export function thumbUrl(src: string): string {
  return src.replace('/images/', '/images/thumbs/');
}

const cache = new Map<string, Promise<void>>();

/** Downloads an image once (later calls share the request). `decode` also rasterises it off the main thread. */
export function loadImage(src: string, decode = true): Promise<void> {
  let task = cache.get(src);
  if (!task) {
    task = new Promise((resolve) => {
      const img = new Image();
      img.onload = () => (decode ? img.decode().catch(() => undefined).then(() => resolve()) : resolve());
      img.onerror = () => resolve();
      img.src = src;
    });
    cache.set(src, task);
  }
  return task;
}

/** Downloads + decodes a full-page screenshot right before it is needed (first hover). */
export function decodeImage(src: string): Promise<void> {
  return loadImage(src).then(() => {
    const img = new Image();
    img.src = src;
    return img.decode().catch(() => undefined);
  });
}

/** Pulls the heavy full-page screenshots into the HTTP cache in idle time, after the page is on screen. */
export function preloadFullScreenshots(concurrency = 2): void {
  const queue = projects.map((p) => p.image);
  const worker = async () => {
    while (queue.length) await loadImage(queue.shift()!, false);
  };
  const start = () => void Promise.all(Array.from({ length: concurrency }, worker));
  if (typeof window.requestIdleCallback === 'function') window.requestIdleCallback(start, { timeout: 2000 });else
  setTimeout(start, 500);
}

/** Downloads every image visible on the page. Resolves when all are done or after `timeout` ms. */
export function preloadAllImages(timeout = 6000): Promise<void> {
  const logos = [...techs, ...floatingTechs].flatMap((tech) =>
  tech.mono ? [techLogoUrl(tech, 'light'), techLogoUrl(tech, 'dark')] : [techLogoUrl(tech, 'dark')]
  );
  const urls = [...new Set([portrait.src, ...projects.map((p) => thumbUrl(p.image)), ...logos])];
  const visible = Promise.all(urls.map((url) => loadImage(url, false))).then(() => undefined);
  return Promise.race([visible, new Promise<void>((resolve) => window.setTimeout(resolve, timeout))]);
}
