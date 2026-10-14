import React from 'react';
import { Magnetic } from './Magnetic';
import { cn } from '../../utils/cn';
import { scrollToTarget } from '../../utils/scroll';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  icon?: React.ReactNode;
  external?: boolean;
  download?: boolean;
  ariaLabel?: string;
  className?: string;
  wrapperClassName?: string;
  magnetic?: boolean;
}

const base =
'group relative isolate inline-flex select-none items-center justify-center overflow-hidden whitespace-nowrap rounded-full font-medium transition-[transform,background-color,border-color,color,box-shadow] duration-200 ease-out active:scale-[0.97]';

const variants: Record<Variant, string> = {
  primary:
  'bg-accent text-ink shadow-[0_10px_30px_-10px_rgb(var(--accent)/0.6)] hover:shadow-[0_14px_40px_-10px_rgb(var(--accent)/0.75)]',
  secondary:
  'border border-line/15 bg-surface/[0.04] text-fg backdrop-blur-md hover:border-line/30 hover:bg-surface/[0.08]',
  ghost: 'text-fg hover:text-accent-ink'
};

const sizes: Record<Size, string> = {
  md: 'h-10 px-5 text-sm',
  lg: 'h-12 px-6 text-[15px] md:h-[52px] md:px-7'
};

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'lg',
  icon,
  external,
  download,
  ariaLabel,
  className,
  wrapperClassName,
  magnetic = true
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], variant === 'ghost' && 'px-3 md:px-3', className);

  const content =
  <>
      {variant === 'primary' &&
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-1/3 -translate-x-[160%] -skew-x-12 bg-white/45 transition-transform duration-300 ease-out group-hover:translate-x-[360%]" />

    }
      <span className="inline-flex items-center gap-2">
        {children}
        {icon &&
      <span
        aria-hidden="true"
        className="inline-flex transition-transform duration-200 ease-out group-hover:translate-x-0.5 [&>svg]:h-4 [&>svg]:w-4">
        
            {icon}
          </span>
      }
      </span>
    </>;


  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      scrollToTarget(href);
    }
    onClick?.();
  };

  const element = href ?
  <a
    href={href}
    onClick={handleAnchorClick}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    download={download || undefined}
    aria-label={ariaLabel}
    className={classes}>
    
      {content}
    </a> :

  <button type="button" onClick={onClick} aria-label={ariaLabel} className={classes}>
      {content}
    </button>;


  return magnetic ? <Magnetic className={wrapperClassName}>{element}</Magnetic> : element;
}