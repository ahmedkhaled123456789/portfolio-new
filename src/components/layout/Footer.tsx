import React from 'react';
import { ArrowUpIcon } from 'lucide-react';
import { SocialLinks } from '../ui/SocialLinks';
import { Magnetic } from '../ui/Magnetic';
import { scrollToTarget } from '../../utils/scroll';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-accent-ink">AHMED KHALED</p>
          <p className="mt-2 text-sm text-muted">Copyright © {year} Ahmed Khaled – All Rights Reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <SocialLinks />
          <span aria-hidden="true" className="h-8 w-px bg-line/10" />
          <Magnetic>
            <button
              type="button"
              onClick={() => scrollToTarget(0)}
              aria-label="Back to top"
              className="group grid h-11 w-11 place-items-center rounded-full bg-accent text-ink transition-transform duration-150 ease-out active:scale-95">
              
              <ArrowUpIcon className="h-[18px] w-[18px] transition-transform duration-200 ease-out group-hover:-translate-y-0.5" />
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>);

}