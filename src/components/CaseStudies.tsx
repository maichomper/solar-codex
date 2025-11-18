'use client';

import { Box, Container, Typography, Chip, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionHeading from './common/SectionHeading';
import Button from './common/Button';
import { fadeInUp, slideInLeft, slideInRight } from '@/utils/animations';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface CaseStudy {
  title: string;
  context: string;
  problem: string;
  solution: string;
  impact: string[];
  services: string[];
  icon: string;
  detailsUrl?: string;
  image?: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Therapy Management System',
    context: 'Confidential healthcare startup with manual therapy booking and management workflows',
    problem: 'Therapists spending 15 minutes per booking, manual processes causing errors and inefficiencies',
    solution: '8-week strategic discovery process using Double Loop Learning, Business Model Canvas, and User Journey Mapping',
    impact: [
      'Reduced booking time from 15 minutes to 2 minutes (87% faster)',
      'Launched MVP in 6 weeks post-discovery',
      '85% therapist satisfaction in early testing',
    ],
    services: ['Strategic Product Discovery', 'UX Strategy'],
    icon: '🏥',
    detailsUrl: '/case-studies/therapy-management-system',
    image: '/illustrations/therapy-platform-discovery-call.jpg',
  },
  {
    title: 'E-commerce Automation',
    context: 'Mid-sized retailer struggling with manual order processing and customer support',
    problem: 'Customer support team overwhelmed with repetitive inquiries, order processing delays causing customer churn',
    solution: 'AI-powered chatbot for common inquiries + automated order processing pipeline',
    impact: [
      '70% reduction in support ticket volume',
      '50% faster order processing',
      '$120K annual savings in operational costs',
    ],
    services: ['AI Agent Development', 'Process Optimization'],
    icon: '🛒',
  },
  {
    title: 'SaaS Product Discovery',
    context: 'Early-stage startup with a broad vision but unclear product direction',
    problem: 'Founders building features based on assumptions, not user needs. Burning runway without traction',
    solution: 'Strategic discovery sprint with impact mapping and user interviews to identify MVP',
    impact: [
      'Pivoted from 20+ planned features to focused 5-feature MVP',
      'Launched in 6 weeks instead of projected 6 months',
      'Achieved product-market fit within 3 months of launch',
    ],
    services: ['Strategic Product Discovery'],
    icon: '🚀',
  },
  {
    title: 'Team Process Overhaul',
    context: 'Growing tech company experiencing delivery bottlenecks and miscommunication',
    problem: 'Engineering team doubled in size, but velocity decreased. Unclear priorities and alignment issues',
    solution: 'Implemented OKR framework + visualized workflows + async collaboration playbook',
    impact: [
      '40% increase in sprint velocity within 2 quarters',
      '90% of team reporting improved clarity on priorities',
      'Onboarding time for new engineers cut in half',
    ],
    services: ['Team & Process Optimization', 'Fractional CTO'],
    icon: '⚙️',
  },
];

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if focus is within the carousel section
      const carouselSection = document.getElementById('case-studies');
      if (!carouselSection?.contains(document.activeElement)) {
        return;
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setDirection(-1);
        setCurrentIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setDirection(1);
        setCurrentIndex(caseStudies.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, caseStudies.length]);

  const study = caseStudies[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <Box
      component="section"
      id="case-studies"
      sx={{
        py: (theme) => theme.custom.section.padding,
        backgroundColor: 'white',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        <SectionHeading
          centered
          subtitle="Real-world examples of how we've helped businesses transform ideas into impact"
        >
          Case Studies
        </SectionHeading>

        <Box sx={{ position: 'relative', overflow: 'hidden', py: 4 }}>
          {/* Navigation Arrows - Moved to Top */}
          <Box
            role="group"
            aria-label="Case study carousel controls"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              mb: 4,
            }}
          >
            <IconButton
              onClick={handlePrev}
              aria-label="Previous case study"
              sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
                width: 48,
                height: 48,
              }}
            >
              <ArrowBackIcon />
            </IconButton>

            <Typography
              variant="body2"
              role="status"
              aria-live="polite"
              aria-atomic="true"
              sx={{ fontWeight: 600, minWidth: 80, textAlign: 'center' }}
            >
              {currentIndex + 1} / {caseStudies.length}
            </Typography>

            <IconButton
              onClick={handleNext}
              aria-label="Next case study"
              sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
                width: 48,
                height: 48,
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>

          <div role="region" aria-live="polite" aria-label={`Case study ${currentIndex + 1} of ${caseStudies.length}: ${study.title}`}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: 4,
                  alignItems: { xs: 'center', md: 'flex-start' },
                }}
              >
                {/* Content Column */}
                <Box sx={{ flex: { xs: '1 1 100%', md: '0 0 55%' } }}>
                  <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, fontSize: { xs: '1.5rem', md: '1.75rem' }, fontFamily: (theme) => theme.custom.fonts.handwriting }}>
                    {study.icon} {study.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      fontStyle: 'italic',
                      fontSize: (theme) => theme.custom.text.bodyFontSizeSmall,
                    }}
                  >
                    {study.context}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 700, color: 'error.main', fontSize: '1.125rem' }}>
                      Problem 😰
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 1,
                        fontSize: (theme) => theme.custom.text.bodyFontSize,
                      }}
                    >
                      {study.problem}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 700, color: 'success.main', fontSize: '1.125rem' }}>
                      Solution ✨
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 1,
                        fontSize: (theme) => theme.custom.text.bodyFontSize,
                      }}
                    >
                      {study.solution}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 700, color: 'secondary.main', fontSize: '1.125rem' }}>
                      Impact 🎯
                    </Typography>
                    <Box component="ul" sx={{ pl: 3, mb: 0 }}>
                      {study.impact.map((item, i) => (
                        <Typography
                          component="li"
                          variant="body1"
                          key={i}
                          sx={{
                            mb: 0.25,
                            fontSize: (theme) => theme.custom.text.bodyFontSize,
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: study.detailsUrl ? 3 : 0 }}>
                    {study.services.map((service, i) => (
                      <Chip
                        key={i}
                        label={service}
                        size="small"
                        sx={{
                          backgroundColor: 'primary.main',
                          color: 'white',
                          fontWeight: 600,
                        }}
                      />
                    ))}
                  </Box>

                  {/* View Full Case Study Button */}
                  {study.detailsUrl && (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        if (study.detailsUrl) {
                          window.location.href = study.detailsUrl;
                        }
                      }}
                      sx={{ mt: 1 }}
                    >
                      View Full Case Study →
                    </Button>
                  )}
                </Box>

                {/* Visual/Diagram Column */}
                <Box sx={{ flex: { xs: '1 1 100%', md: '0 0 40%' } }}>
                  {study.image ? (
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        height: 'auto',
                        borderRadius: 2,
                        overflow: 'hidden',
                        border: (theme) => theme.custom.card.border,
                        borderColor: 'divider',
                        boxShadow: 3,
                      }}
                    >
                      <Image
                        src={study.image}
                        alt={`${study.title} - Project visual`}
                        width={600}
                        height={800}
                        sizes="(max-width: 900px) 100vw, 600px"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        p: 4,
                        backgroundColor: 'background.paper',
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
                      <Box sx={{ fontSize: '4rem', mb: 2 }}>{study.icon}</Box>
                      <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
                        Process Map
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', fontSize: '0.875rem' }}>
                        Problem → Solution → Impact
                        <br />
                        <br />
                        Hand-drawn visual showing transformation
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Box>
            </motion.div>
          </AnimatePresence>
          </div>
        </Box>
      </Container>
    </Box>
  );
}
