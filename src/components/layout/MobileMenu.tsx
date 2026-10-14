import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRightIcon, PhoneIcon, XIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { SocialLinks } from '../ui/SocialLinks';
import { navLinks } from '../../data/navigation';
import { contact } from '../../data/contact';
import { cn } from '../../utils/cn';
import { easeOut } from '../../utils/motion';
import { pauseScroll, scrollToTarget } from '../../utils/scroll';

interface MobileMenuProps {
  open: boolean;
  active: string;
  onClose: () => void;
}

export function MobileMenu({ open, active, onClose }: MobileMenuProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    pauseScroll(true);
    const focusTimer = window.setTimeout(() => firstLinkRef.current?.focus(), 120);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
      pauseScroll(false);
      window.clearTimeout(focusTimer);
    };
  }, [open, onClose]);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onClose();
    window.setTimeout(() => scrollToTarget(`#${id}`), 60);
  };

  return (
    <AnimatePresence>
      {open &&
      <motion.div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="fixed inset-0 z-[70] flex flex-col bg-bg px-6 pb-8 pt-5 lg:hidden"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.25, ease: easeOut }}>
        
          <div className="flex items-center justify-between">
            <span className="font-display text-[13px] font-semibold tracking-[0.2em] text-accent-ink">AHMED KHALED</span>
            <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-line/10 bg-surface/[0.04] transition-transform duration-150 ease-out active:scale-95">
            
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-14">
            <ul className="space-y-1">
              {navLinks.map((link, i) =>
            <li key={link.id} className="overflow-hidden border-b border-line/10">
                  <motion.a
                ref={i === 0 ? firstLinkRef : undefined}
                href={`#${link.id}`}
                onClick={(e) => go(e, link.id)}
                aria-current={active === link.id ? 'true' : undefined}
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.3, delay: 0.06 + i * 0.05, ease: easeOut }}
                className={cn(
                  'flex items-center justify-between py-4 font-display text-[2.5rem] font-semibold leading-none tracking-tight',
                  active === link.id ? 'text-accent-ink' : 'text-fg'
                )}>
                
                    {link.label}
                    <ArrowUpRightIcon className="h-6 w-6 text-muted" aria-hidden="true" />
                  </motion.a>
                </li>
            )}
            </ul>
          </nav>

          <motion.div
          className="mt-auto flex flex-col gap-6 pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}>
          
            <Button href={contact.phoneHref} icon={<PhoneIcon />} magnetic={false} className="w-full">
              Call {contact.phone}
            </Button>
            <SocialLinks />
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}