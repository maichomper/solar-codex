'use client';

import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ children, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <Box
      component={motion.div}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      sx={{
        textAlign: centered ? 'center' : 'left',
        mb: 6,
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          mb: subtitle ? 2 : 0,
          fontFamily: (theme) => theme.custom.fonts.handwriting,
        }}
      >
        {children}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            maxWidth: centered ? '800px' : '100%',
            mx: centered ? 'auto' : 0,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
