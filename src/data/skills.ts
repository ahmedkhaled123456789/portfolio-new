import type { SkillGroup } from '../types/portfolio';

export const skillGroups: SkillGroup[] = [
{
  id: 'frontend',
  title: 'Frontend',
  summary: 'Pixel-precise interfaces that load fast, feel effortless and scale with the product.',
  items: ['React', 'Next.js', 'Redux', 'Tailwind', 'TypeScript', 'JavaScript']
},
{
  id: 'backend',
  title: 'Backend',
  summary: 'Secure, well-structured APIs and services built to last.',
  items: ['Node.js', 'NestJS', 'Express', 'Laravel', 'PHP (OOP)', 'REST', 'GraphQL', 'JWT']
},
{
  id: 'automation',
  title: 'Automation',
  summary: 'Workflows that remove the busywork.',
  items: ['n8n', 'AI', 'APIs', 'Webhooks']
},
{
  id: 'database',
  title: 'Database',
  summary: 'Data modeled for speed and integrity.',
  items: ['MongoDB', 'MySQL', 'ERPNext']
},
{
  id: 'cms',
  title: 'CMS',
  summary: 'Sites content teams can own.',
  items: ['WordPress', 'Elementor', 'Shopify']
},
{
  id: 'performance',
  title: 'Performance',
  summary: 'Green Core Web Vitals by default.',
  items: ['SEO', 'Core Web Vitals', 'Optimization']
},
{
  id: 'tools',
  title: 'Tools',
  summary: 'A tested, versioned workflow.',
  items: ['Git', 'GitHub', 'Postman', 'Jest']
},
{
  id: 'other',
  title: 'Other',
  summary: 'How I build and collaborate.',
  items: ['OOP', 'Agile', 'Responsive Design']
}];