import React from 'react';

const particles = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  top: 30 + i * 53 % 70,
  size: 1 + i % 3,
  duration: 9 + i % 6 * 2,
  delay: -(i * 1.7 % 12)
}));

export function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="animate-drift-a absolute -left-[15%] -top-[25%] h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle_at_center,rgb(var(--violet)/0.35),transparent_62%)] will-change-transform" />
      <div className="animate-drift-b absolute -right-[12%] top-[5%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgb(var(--accent)/0.22),transparent_62%)] will-change-transform" />
      <div className="animate-drift-a absolute bottom-[-30%] left-[30%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgb(var(--electric)/0.22),transparent_62%)] will-change-transform [animation-delay:-8s]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(var(--line)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--line)/0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black_20%,transparent_80%)]" />

      {particles.map((p, i) =>
      <span
        key={i}
        className="animate-particle absolute rounded-full bg-accent/70"
        style={{
          left: `${p.left}%`,
          top: `${p.top}%`,
          width: p.size,
          height: p.size,
          animationDuration: `${p.duration}s`,
          animationDelay: `${p.delay}s`
        }} />

      )}

      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_bottom,transparent,rgb(var(--bg)))]" />
    </div>);

}