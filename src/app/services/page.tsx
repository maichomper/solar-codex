import type { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
  title: 'Our Services - Strategic Product Discovery, AI Development & More',
  description: 'Discover our services: Strategic Product Discovery, AI Agent Development, Team Optimization, and Fractional CTO services. Tailored solutions for your business needs.',
  openGraph: {
    title: 'Our Services - SolarCodex',
    description: 'Strategic Product Discovery, AI Agent Development, Team Optimization, and Fractional CTO services.',
    url: '/services',
  },
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
