import type { Experience } from '../types/portfolio';

export const experience: Experience[] = [
{
  id: 'almualla',
  role: 'Full Stack Developer',
  company: 'Sheikh Abdulaziz bin Abdullah Al Mualla',
  location: 'Dubai, UAE',
  period: 'Jan 2026 – Present',
  current: true,
  highlights: [
  "Built an ERP system for the group's operations with a NestJS backend and a React frontend.",
  "Delivered 5 production websites for the group's companies with Next.js, SSR/SSG and technical SEO.",
  'Built a multi-step financing portal (3 currencies, request tracking) and 10+ service request flows across 5 domains.',
  'Automated lead intake with n8n, webhooks and AI, removing manual hand-offs between departments.'],

  stack: ['Next.js', 'NestJS', 'React', 'TypeScript', 'n8n', 'SEO']
},
{
  id: 'almutakamela',
  role: 'Full Stack Developer',
  company: 'Al Mutakamela Vehicle Testing & Registration',
  location: 'Dubai, UAE',
  period: 'Jul 2025 – Dec 2025',
  highlights: [
  'Built a 7-module in-house ERP (HR, payroll, attendance, tasks, workflows, permissions, reporting) for an RTA-authorized center with 3 Dubai branches.',
  'Designed role-based access control with granular permissions across every module and branch.',
  'Kept reports and dashboards fast as data grew through query and API optimization.'],

  stack: ['Laravel', 'MySQL', 'React', 'Redux Toolkit']
},
{
  id: 'ynafs',
  role: 'Full Stack Developer',
  company: 'Ynafs',
  location: 'Remote, Saudi Arabia · Part-time',
  period: 'Mar 2024 – Sep 2025',
  highlights: [
  'Developed Tahder Plus, a teacher productivity suite with 10K+ users and 30+ tools.',
  'Integrated with 2 Saudi national education platforms (Madrasati and Noor) for lesson prep, grades and reporting.',
  'Built a desktop School Management System with Electron.js and role-based dashboards.'],

  stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Electron.js']
},
{
  id: 'kickstart',
  role: 'Frontend Developer',
  company: 'Kick Start Interactive',
  location: 'Egypt',
  period: 'Jan 2022 – May 2024',
  highlights: [
  'Shipped 6 client products, including Makan, a booking platform covering 157 Saudi cities.',
  'Built AqarMap Saudi, an AI-powered real estate app rated 4.7★ on the App Store.',
  'Delivered Arab Gift Card, Jawib, Hedaya and Okamel with REST and GraphQL APIs.'],

  stack: ['React', 'Vue.js', 'Redux Toolkit', 'GraphQL', 'Ant Design']
}];
