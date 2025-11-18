'use client';

import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeading from './common/SectionHeading';
import ServiceCard from './ServiceCard';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const services = [
  {
    title: 'Strategic Product Discovery',
    tagline: 'Validate ideas before you build',
    icon: '🎯',
    id: 'strategic-discovery',
  },
  {
    title: 'AI Agent Development & Integration',
    tagline: 'Intelligent automation that delivers ROI',
    icon: '🤖',
    id: 'ai-development',
  },
  {
    title: 'Team & Process Optimization',
    tagline: 'Build better products, faster',
    icon: '⚙️',
    id: 'team-optimization',
  },
  {
    title: 'Fractional CTO Services',
    tagline: 'Strategic tech leadership on demand',
    icon: '👨‍💻',
    id: 'fractional-cto',
  },
];

export default function Services() {
  const handleServiceClick = (serviceId: string) => {
    window.location.href = `/services#${serviceId}`;
  };

  return (
    <Box
      component="section"
      id="services"
      sx={{
        py: (theme) => theme.custom.section.padding,
        backgroundColor: 'white',
      }}
    >
      <Container maxWidth="xl">
        <SectionHeading
          centered
          subtitle="We help you build the right products through strategic discovery, intelligent automation, and proven frameworks."
        >
          What We Do
        </SectionHeading>

        <Box
          component={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {services.map((service, index) => (
              <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(50% - 16px)' } }} key={index}>
                <Box component={motion.div} variants={fadeInUp}>
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.tagline}
                    onClick={() => handleServiceClick(service.id)}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
