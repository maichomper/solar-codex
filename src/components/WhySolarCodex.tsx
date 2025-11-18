'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from './common/SectionHeading';
import { fadeInUp, slideInLeft, slideInRight } from '@/utils/animations';

export default function WhySolarCodex() {
  return (
    <Box
      component="section"
      id="why-solarcodex"
      sx={{
        py: (theme) => theme.custom.section.padding,
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="xl">
        <SectionHeading centered>Why SolarCodex?</SectionHeading>

        {/* Problem vs Solution - Side by Side */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 6, md: 4 },
            mb: 8,
          }}
        >
          {/* Problem Side */}
          <Box
            component={motion.div}
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            sx={{ flex: 1, textAlign: 'center' }}
          >
            {/* Illustration */}
            <Box
              sx={{
                mb: 4,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Image
                src="/illustrations/problem.png"
                alt="The Problem - Lost in the noise, building without direction"
                width={400}
                height={250}
                sizes="(max-width: 900px) 100vw, 400px"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>

            {/* Text */}
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontWeight: 700,
                fontSize: { xs: '1.75rem', md: '2rem' },
              }}
            >
              THE PROBLEM
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: (theme) => theme.custom.text.lineHeight,
                color: 'text.secondary',
                fontSize: (theme) => theme.custom.text.bodyFontSize,
              }}
            >
              Most businesses struggle to bridge the gap between their vision and execution. They
              build features, not impact. They chase AI trends without understanding where
              automation actually delivers value.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: (theme) => theme.custom.text.lineHeight,
                color: 'text.secondary',
                fontSize: (theme) => theme.custom.text.bodyFontSize,
                mb: 2,
              }}
            >
              The result? Wasted time, missed opportunities, and products that don't resonate with
              users.
            </Typography>
            <Box sx={{ fontSize: '2rem' }}>😰</Box>
          </Box>

          {/* Solution Side */}
          <Box
            component={motion.div}
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            sx={{ flex: 1, textAlign: 'center' }}
          >
            {/* Illustration */}
            <Box
              sx={{
                mb: 4,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Image
                src="/illustrations/solution.png"
                alt="The Solution - Clear path with strategic direction"
                width={400}
                height={250}
                sizes="(max-width: 900px) 100vw, 400px"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>

            {/* Text */}
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontWeight: 700,
                fontSize: { xs: '1.75rem', md: '2rem' },
              }}
            >
              THE SOLUTION
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: (theme) => theme.custom.text.lineHeight,
                color: 'text.primary',
                fontSize: (theme) => theme.custom.text.bodyFontSize,
              }}
            >
              SolarCodex combines visual thinking with proven product frameworks to help you build
              the <strong>right</strong> products. We map out opportunities visually, automate
              intelligently, and ensure every decision aligns with measurable business impact.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: (theme) => theme.custom.text.lineHeight,
                fontWeight: 600,
                color: 'text.primary',
                fontSize: (theme) => theme.custom.text.bodyFontSize,
                mb: 2,
              }}
            >
              We're your strategic partner—transforming ideas into products customers love.
            </Typography>
            <Box sx={{ fontSize: '2rem' }}>✨</Box>
          </Box>
        </Box>

        {/* Status Quo vs SolarCodex Comparison - Full Width */}
        <Box
          component={motion.div}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Typography
            variant="h3"
            sx={{
              mb: 4,
              fontWeight: 700,
              textAlign: 'center',
              fontSize: { xs: '1.75rem', md: '2rem' },
            }}
          >
            The Difference in Action
          </Typography>

          <Box
            sx={{
              p: (theme) => theme.custom.card.padding,
              backgroundColor: 'white',
              borderRadius: (theme) => theme.custom.card.borderRadius,
              boxShadow: 3,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 4, md: 6 },
                alignItems: 'flex-start',
              }}
            >
              {/* Status Quo Column */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    fontWeight: 700,
                    color: 'text.secondary',
                    textAlign: 'center',
                  }}
                >
                  Status Quo
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: 'text.secondary' }}>
                      ❌ No clear vision
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                      Building features based on assumptions
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: 'text.secondary' }}>
                      ❌ AI for AI's sake
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                      Chasing trends without strategy
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: 'text.secondary' }}>
                      ❌ Output-focused
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                      Measuring features shipped, not impact
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: 'text.secondary' }}>
                      ❌ Guessing what users need
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                      No validated learning process
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 2, p: 2, backgroundColor: 'grey.100', borderRadius: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'error.main', textAlign: 'center' }}>
                      Result: Wasted investment 💸
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Divider */}
              <Box
                sx={{
                  width: { xs: '100%', md: '2px' },
                  height: { xs: '2px', md: 'auto' },
                  backgroundColor: 'divider',
                }}
              />

              {/* SolarCodex Approach Column */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    fontWeight: 700,
                    color: 'primary.main',
                    textAlign: 'center',
                  }}
                >
                  SolarCodex Approach
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: 'primary.main' }}>
                      ✓ Vision-driven
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', fontSize: '0.9rem' }}>
                      Start with goals, align every decision
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: 'primary.main' }}>
                      ✓ Visual thinking
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', fontSize: '0.9rem' }}>
                      Map opportunities before building
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: 'primary.main' }}>
                      ✓ Impact-focused
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', fontSize: '0.9rem' }}>
                      Measure outcomes, not outputs
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: 'primary.main' }}>
                      ✓ AI with purpose
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', fontSize: '0.9rem' }}>
                      Automate only where it adds real value
                    </Typography>
                  </Box>

                  <Box sx={{
                    mt: 2,
                    p: 2,
                    backgroundColor: (theme) => theme.custom.processStep.backgroundColor,
                    borderRadius: 1
                  }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'secondary.main', textAlign: 'center' }}>
                      Result: Products customers love ❤️
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
