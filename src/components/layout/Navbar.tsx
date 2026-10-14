import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MenuIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';
import { navLinks } from '../../data/navigation';
import { useActiveSection } from '../../hooks/useActiveSection';
import { cn } from '../../utils/cn';
import { scrollToTarget } from '../../utils/scroll';

const sectionIds = navLinks.map((l) => l.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToTarget(id === 'home' ? 0 : `#${id}`);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 md:pt-4">
        <nav
          aria-label="Primary"
          className={cn(
            'mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border transition-[background-color,border-color,padding,box-shadow] duration-300 ease-out',
            scrolled ?
            'border-line/10 bg-bg/70 py-1.5 pl-5 pr-1.5 shadow-[0_12px_40px_-18px_rgb(0_0_0/0.55)] backdrop-blur-xl' :
            'border-transparent bg-transparent py-3 pl-3 pr-1'
          )}>
          
          <a
            href="#home"
            onClick={(e) => go(e, 'home')}
            className="shrink-0 font-display text-[13px] font-semibold tracking-[0.2em] text-accent-ink sm:text-sm">
            
            AHMED KHALED
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => go(e, link.id)}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'relative isolate block whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors duration-200 ease-out',
                      isActive ? 'text-fg' : 'text-muted hover:text-fg'
                    )}>
                    
                    {isActive &&
                    <motion.span
                      layoutId="nav-pill"
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 rounded-full border border-line/10 bg-surface/[0.07]"
                      transition={{ type: 'spring', stiffness: 420, damping: 36 }} />

                    }
                    {link.label}
                  </a>
                </li>);

            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button href="#contact" size="md" wrapperClassName="hidden sm:inline-flex">
              Hire Me
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-line/10 bg-surface/[0.04] transition-transform duration-150 ease-out active:scale-95 lg:hidden">
              
              <MenuIcon className="h-[18px] w-[18px]" />
            </button>
          </div>
        </nav>
      </header>
      <MobileMenu open={menuOpen} active={active} onClose={closeMenu} />
    </>);

}