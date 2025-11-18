'use client';

import { Box, Container, Typography, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeading from './common/SectionHeading';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const phases = [
  {
    number: '01',
    name: 'Discover',
    icon: '🔍',
    description: 'Understand your vision, map opportunities, identify constraints',
  },
  {
    number: '02',
    name: 'Storyboard',
    icon: '📝',
    description: 'Visualize user journeys, sketch solutions, align stakeholders',
  },
  {
    number: '03',
    name: 'Concept',
    icon: '💡',
    description: 'Prototype ideas, validate assumptions, refine direction',
  },
  {
    number: '04',
    name: 'Develop & Deliver',
    icon: '🚀',
    description: 'Build iteratively, ship value early, measure impact',
  },
  {
    number: '05',
    name: 'Evolve',
    icon: '🔄',
    description: 'Learn from data, optimize continuously, scale what works',
  },
];

const frameworks = [
  { name: 'Visual Thinking', icon: '✏️' },
  { name: 'Impact Mapping', icon: '🗺️' },
  { name: 'Inspired Framework', icon: '💎' },
  { name: 'Traction/EOS', icon: '⚡' },
  { name: 'OKR Framework', icon: '🎯' },
  { name: 'Double Loop Design', icon: '🔁' },
];

const differentiators = [
  {
    title: 'Impact-Driven',
    description: 'We measure success by business outcomes, not feature count',
    icon: '📊',
  },
  {
    title: 'Visual by Design',
    description: 'Complex ideas become clear through diagrams, maps, and sketches',
    icon: '🎨',
  },
  {
    title: 'AI as a Tool',
    description: 'Strategic automation where it matters, not AI for AI sake',
    icon: '🤖',
  },
  {
    title: 'Remote-Optimized',
    description: 'Async-first workflows that respect your time and timezone',
    icon: '🌍',
  },
];

export default function HowWeWork() {
  return (
    <Box
      component="section"
      id="how-we-work"
      sx={{
        py: (theme) => theme.custom.section.padding,
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="xl">
        <SectionHeading centered>How We Work</SectionHeading>

        {/* Philosophy */}
        <Box
          component={motion.div}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          sx={{ mb: 8, textAlign: 'center' }}
        >
          <Typography variant="body1" sx={{ fontSize: '1.25rem', maxWidth: '800px', mx: 'auto', mb: 2 }}>
            We believe the best products emerge from <strong>clarity, collaboration, and iteration</strong>.
            Our methodology combines visual thinking with proven frameworks to help you make better decisions faster.
          </Typography>
        </Box>

        {/* The SolarCodex Method */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" sx={{ mb: 4, textAlign: 'center', fontWeight: 700 }}>
            The SolarCodex Method
          </Typography>

          <Box
            component={motion.div}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
              {phases.map((phase, index) => (
                <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 12px)', md: '1 1 calc(33.333% - 12px)' } }} key={index}>
                  <Box
                    component={motion.div}
                    variants={fadeInUp}
                    sx={{
                      p: 3,
                      height: '100%',
                      backgroundColor: 'white',
                      borderRadius: 2,
                      boxShadow: 2,
                      position: 'relative',
                      '&:hover': {
                        boxShadow: 4,
                      },
                      transition: 'box-shadow 0.3s ease',
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        color: 'text.secondary',
                        fontWeight: 700,
                      }}
                    >
                      {phase.number}
                    </Typography>
                    <Box sx={{ fontSize: '3rem', mb: 2 }}>{phase.icon}</Box>
                    <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
                      {phase.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {phase.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Process Diagram Placeholder */}
          <Box
            component={motion.div}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            sx={{
              mt: 6,
              p: 4,
              backgroundColor: 'white',
              borderRadius: 2,
              border: '2px dashed',
              borderColor: 'divider',
              minHeight: 300,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
              🔄 Circular Process Diagram
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
              Hand-drawn illustration showing the 5 phases in a continuous loop
              <br />
              (Discover → Storyboard → Concept → Develop & Deliver → Evolve → repeat)
            </Typography>
          </Box>
        </Box>

        {/* Our Toolkit */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" sx={{ mb: 4, textAlign: 'center', fontWeight: 700 }}>
            Our Toolkit
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', color: 'text.secondary' }}>
            We leverage battle-tested frameworks adapted to your needs
          </Typography>

          <Box
            component={motion.div}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              justifyContent: 'center',
            }}
          >
            {frameworks.map((framework, index) => (
              <Box
                key={index}
                component={motion.div}
                variants={fadeInUp}
              >
                <Chip
                  label={framework.name}
                  icon={<span style={{ fontSize: '1.5rem' }}>{framework.icon}</span>}
                  sx={{
                    px: 2,
                    py: 3,
                    fontSize: '1rem',
                    fontWeight: 600,
                    backgroundColor: 'white',
                    boxShadow: 1,
                    '&:hover': {
                      boxShadow: 3,
                    },
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* What Makes Us Different */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" sx={{ mb: 4, textAlign: 'center', fontWeight: 700 }}>
            What Makes Us Different
          </Typography>

          <Box
            component={motion.div}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {differentiators.map((item, index) => (
                <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 16px)' } }} key={index}>
                  <Box
                    component={motion.div}
                    variants={fadeInUp}
                    sx={{
                      p: 3,
                      backgroundColor: 'white',
                      borderRadius: 2,
                      boxShadow: 2,
                      height: '100%',
                      '&:hover': {
                        boxShadow: 4,
                      },
                      transition: 'box-shadow 0.3s ease',
                    }}
                  >
                    <Box sx={{ fontSize: '2.5rem', mb: 2 }}>{item.icon}</Box>
                    <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* How We Collaborate */}
        <Box
          component={motion.div}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          sx={{
            p: 4,
            backgroundColor: 'white',
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', fontWeight: 700 }}>
            How We Collaborate
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(33.333% - 16px)' } }}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
                Tools 🛠️
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Slack, Notion, Figma, Miro, GitHub—we adapt to your existing stack
              </Typography>
            </Box>
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(33.333% - 16px)' } }}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
                Cadence ⏰
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Weekly check-ins, async updates, and on-demand support when you need it
              </Typography>
            </Box>
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(33.333% - 16px)' } }}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
                Deliverables 📦
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Visual maps, documentation, working code, and actionable insights
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
