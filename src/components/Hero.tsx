'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Button from './common/Button';
import { fadeInUp, fadeIn } from '@/utils/animations';
import Image from 'next/image';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowWeWork = () => {
    document.getElementById('how-we-work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: { xs: 'auto', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
        py: { xs: 4, md: 6 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Tagline Above Image */}
          <Box
            component={motion.div}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            sx={{
              textAlign: 'center',
              maxWidth: (theme) => theme.custom.hero.maxWidth,
              mb: (theme) => theme.custom.hero.spacing,
              px: 2
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 800,
                mb: 0,
                fontSize: (theme) => theme.custom.hero.headlineFontSize,
                fontFamily: "'Micho Handwriting', cursive !important",
              }}
            >
              Turn your vision into reality.{' '}
              <Box
                component="span"
                sx={{
                  display: 'block',
                  mt: 0,
                }}
              >
                Build digital products{' '}
                <Box
                  component="span"
                  sx={{
                    color: 'secondary.main',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      right: 0,
                      height: 3,
                      backgroundColor: 'secondary.main',
                      opacity: 0.3,
                    },
                  }}
                >
                  customers love
                </Box>
                .
              </Box>
            </Typography>
          </Box>

          {/* Hero Image */}
          <Box
            component={motion.div}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            sx={{
              width: '100%',
              maxWidth: (theme) => theme.custom.hero.imageMaxWidth,
              mt: 0,
              mb: (theme) => theme.custom.hero.spacing,
              display: 'flex',
              justifyContent: 'center',
              '& img': {
                width: '100%',
                height: 'auto',
                display: 'block',
              },
            }}
          >
            <Image
              src="/illustrations/hero.svg"
              alt="SolarCodex - Turn your vision into reality"
              width={1200}
              height={400}
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </Box>

          {/* Description and CTAs Below Image */}
          <Box
            component={motion.div}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            sx={{
              textAlign: 'center',
              maxWidth: (theme) => theme.custom.hero.imageMaxWidth,
              mt: 0,
              px: 2
            }}
          >
            <Typography
              variant="body1"
              sx={{
                mb: (theme) => theme.custom.hero.spacing,
                mt: 0,
                fontSize: (theme) => theme.custom.hero.descriptionFontSize,
                color: 'text.secondary',
                mx: 'auto',
              }}
            >
              We help businesses design, develop, and launch impactful products that resonate
              with their audience using the power of visualization and AI to streamline the
              decision making process.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button onClick={scrollToContact}>
                Get Your Free AI Radar Opportunity Map 🎯
              </Button>
              <Button variant="outlined" color="primary" onClick={scrollToHowWeWork}>
                See How We Work
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
