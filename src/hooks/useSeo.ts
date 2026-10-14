import { useEffect } from 'react';
import { portrait } from '../data/hero';

const TITLE = 'Ahmed Khaled — Full Stack Engineer';
const DESCRIPTION =
'Full Stack Engineer building fast, beautiful digital products with React, Next.js, Node.js, NestJS, Laravel and React Native.';

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function useSeo(): void {
  useEffect(() => {
    document.title = TITLE;
    document.documentElement.lang = 'en';
    setMeta('name', 'description', DESCRIPTION);
    setMeta('name', 'theme-color', '#07070A');
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:title', TITLE);
    setMeta('property', 'og:description', DESCRIPTION);
    setMeta('property', 'og:image', portrait.src);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', TITLE);
    setMeta('name', 'twitter:description', DESCRIPTION);
    setMeta('name', 'twitter:image', portrait.src);
  }, []);
}