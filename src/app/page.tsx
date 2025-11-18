'use client';

import Hero from '@/components/Hero';
import WhySolarCodex from '@/components/WhySolarCodex';
import Services from '@/components/Services';
import HowWeWork from '@/components/HowWeWork';
import CaseStudies from '@/components/CaseStudies';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <WhySolarCodex />
      <Services />
      <HowWeWork />
      <CaseStudies />
      <Contact />
    </>
  );
}
