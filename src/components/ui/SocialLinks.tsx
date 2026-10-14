import React from 'react';
import { MailIcon } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './BrandIcons';
import { socials } from '../../data/contact';
import { cn } from '../../utils/cn';
import type { SocialId } from '../../types/portfolio';

const icons: Record<SocialId, React.ComponentType<{className?: string;}>> = {
  email: MailIcon,
  github: GithubIcon,
  whatsapp: WhatsappIcon,
  linkedin: LinkedinIcon
};

export function SocialLinks({ className }: {className?: string;}) {
  return (
    <ul className={cn('flex items-center gap-2', className)} aria-label="Social links">
      {socials.map((social) => {
        const Icon = icons[social.id];
        const isExternal = social.id !== 'email';
        return (
          <li key={social.id}>
            <a
              href={social.href}
              aria-label={social.label}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="group grid h-11 w-11 place-items-center rounded-full border border-line/10 bg-surface/[0.03] text-muted transition-[color,border-color,background-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/10 hover:text-accent-ink active:scale-95">
              
              <Icon className="h-[18px] w-[18px] transition-transform duration-200 ease-out group-hover:scale-110" />
            </a>
          </li>);

      })}
    </ul>);

}