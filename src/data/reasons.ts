import type { Reason } from '../types/portfolio';

export const reasons: Reason[] = [
{
  id: 'end-to-end',
  title: 'End-to-end ownership',
  description:
  'From database design and secure APIs to the frontend and deployment, one person owns the whole build. That includes a 7-module ERP running 3 Dubai branches.',
  icon: 'layers'
},
{
  id: 'gulf',
  title: 'Built for the Gulf market',
  description:
  'Bilingual Arabic/English, RTL-first interfaces and local payments (Mada, Visa, Stripe), shipped for clients in the UAE and Saudi Arabia.',
  icon: 'globe'
},
{
  id: 'scale',
  title: 'Proven at scale',
  description:
  'Products in daily use: a teacher suite with 10K+ users and a booking platform covering 157 Saudi cities.',
  icon: 'scale'
},
{
  id: 'automation',
  title: 'Automation that saves hours',
  description:
  'n8n workflows, webhooks and AI that remove manual hand-offs, so leads and requests reach the right team on their own.',
  icon: 'automation'
}];
