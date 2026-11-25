export type ProjectCategory = 'Web' | 'Mobile' | 'E-commerce' | 'Platform';

export interface Project {
  id: string;
  title: string;
  tag: string;
  description: string;
  /** One headline number shown on the card, e.g. "10K+ teachers". */
  metric?: string;
  stack?: string[];
  url: string;
  image: string;
  category: ProjectCategory;
  device: 'laptop' | 'phone';
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
  stack: string[];
}

export interface Tech {
  name: string;
  slug: string;
  color: string;
  mono?: boolean;
}

export type SkillId =
'frontend' |
'backend' |
'automation' |
'database' |
'cms' |
'performance' |
'tools' |
'other';

export interface SkillGroup {
  id: SkillId;
  title: string;
  summary: string;
  items: string[];
}

export type SocialId = 'email' | 'github' | 'whatsapp' | 'linkedin';

export interface SocialLink {
  id: SocialId;
  label: string;
  href: string;
}

export type ReasonIcon = 'layers' | 'globe' | 'scale' | 'automation';

export interface Reason {
  id: string;
  title: string;
  description: string;
  icon: ReasonIcon;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface NavLink {
  id: string;
  label: string;
}