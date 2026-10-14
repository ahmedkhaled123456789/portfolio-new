import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { techLogoUrl } from '../../utils/preload';
import type { Tech } from '../../types/portfolio';

interface TechLogoProps {
  tech: Tech;
  size?: number;
  className?: string;
}

export function TechLogo({ tech, size = 24, className }: TechLogoProps) {
  const { theme } = useTheme();
  return (
    <img
      src={techLogoUrl(tech, theme)}
      alt=""
      width={size}
      height={size}
      loading="eager"
      decoding="async"
      className={className}
      style={{ width: size, height: size }} />);


}