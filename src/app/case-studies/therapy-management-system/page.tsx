import type { Metadata } from 'next';
import CaseStudyPageClient from './CaseStudyPageClient';

export const metadata: Metadata = {
  title: 'Case Study: Therapy Management System - Strategic Product Discovery',
  description: 'How SolarCodex helped a healthcare startup reduce booking time by 87% through strategic product discovery and UX strategy. 8-week engagement using Double Loop Learning and visual thinking.',
  openGraph: {
    title: 'Case Study: Therapy Management System - SolarCodex',
    description: 'Reduced booking time by 87% through strategic product discovery. Learn how visual thinking and proven frameworks transformed this healthcare startup.',
    url: '/case-studies/therapy-management-system',
  },
  alternates: {
    canonical: '/case-studies/therapy-management-system',
  },
};

export default function CaseStudyPage() {
  return <CaseStudyPageClient />;
}
