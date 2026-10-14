import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { decodeImage, thumbUrl } from '../../utils/preload';

interface DeviceFrameProps {
  type: 'laptop' | 'phone';
  src: string;
  alt: string;
  className?: string;
}

// Full-page screenshots scroll from top to bottom on card hover (slow in, quick back).
// Scroll distance = image height - frame height, via container query units on the frame.
const imageClass =
'absolute inset-x-0 top-0 h-auto min-h-full w-full object-cover object-top will-change-transform transition-transform duration-700 ease-in-out group-hover:duration-[5000ms] group-hover:[transform:translateY(calc(-100%_+_100cqh))] motion-reduce:group-hover:[transform:none]';

/**
 * Shows the light top-of-page thumbnail, and swaps in the full-page screenshot (decoded first, so
 * nothing flashes) the first time the surrounding card is hovered — that is when the scroll needs it.
 */
function useProgressiveSrc(full: string) {
  const ref = useRef<HTMLDivElement>(null);
  const [src, setSrc] = useState(() => thumbUrl(full));
  useEffect(() => {
    const card = ref.current?.closest('.group');
    if (!card) return;
    let alive = true;
    const upgrade = () => {
      card.removeEventListener('pointerenter', upgrade);
      decodeImage(full).then(() => alive && setSrc(full));
    };
    card.addEventListener('pointerenter', upgrade);
    return () => {
      alive = false;
      card.removeEventListener('pointerenter', upgrade);
    };
  }, [full]);
  return { ref, src };
}

export function DeviceFrame({ type, src: fullSrc, alt, className }: DeviceFrameProps) {
  const { ref, src } = useProgressiveSrc(fullSrc);
  if (type === 'phone') {
    return (
      <div
        ref={ref}
        className={cn(
          'relative aspect-[9/19] rounded-[1.6rem] bg-[#0c0c10] p-[5px] shadow-[0_30px_60px_-20px_rgb(0_0_0/0.65)] ring-1 ring-white/10',
          className
        )}>
        
        <div className="relative h-full w-full overflow-hidden rounded-[1.3rem] bg-black [container-type:size]">
          <img src={src} alt={alt} width={540} height={1140} loading="eager" decoding="async" className={imageClass} />
          <span aria-hidden="true" className="absolute left-1/2 top-1.5 h-3.5 w-14 -translate-x-1/2 rounded-full bg-black" />
        </div>
      </div>);

  }

  return (
    <div ref={ref} className={cn('relative w-full', className)}>
      <div className="relative rounded-t-[0.9rem] bg-[#0c0c10] p-[2.2%] pb-[2.6%] shadow-[0_30px_60px_-25px_rgb(0_0_0/0.7)] ring-1 ring-white/10">
        <span aria-hidden="true" className="absolute left-1/2 top-[0.8%] h-1 w-1 -translate-x-1/2 rounded-full bg-white/25" />
        <div className="relative aspect-[16/10] overflow-hidden rounded-[3px] bg-black [container-type:size]">
          <img src={src} alt={alt} width={1280} height={800} loading="eager" decoding="async" className={imageClass} />
        </div>
      </div>
      <div aria-hidden="true" className="relative -mx-[5%] h-2.5 rounded-b-[10px] bg-[#1c1c22] ring-1 ring-white/5 md:h-3">
        <span className="absolute left-1/2 top-0 h-1/2 w-[14%] -translate-x-1/2 rounded-b-md bg-[#0c0c10]" />
      </div>
    </div>);

}