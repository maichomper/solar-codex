'use client';

import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
}

export default function ServiceCard({ icon, title, description, onClick }: ServiceCardProps) {
  return (
    <Card
      component={motion.div}
      whileHover={{
        y: -8,
        boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.15)',
      }}
      onClick={onClick}
      sx={{
        height: '100%',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          '& .learn-more': {
            color: 'secondary.main',
          },
        },
      }}
    >
      <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            fontSize: '4rem',
            mb: 3,
            textAlign: 'center',
          }}
        >
          {icon}
        </Box>

        <Typography
          variant="h4"
          component="h3"
          sx={{
            mb: 2,
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: 'text.secondary',
            textAlign: 'center',
            flexGrow: 1,
          }}
        >
          {description}
        </Typography>

        <Box
          className="learn-more"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            color: 'primary.main',
            fontWeight: 600,
            transition: 'color 0.3s ease',
          }}
        >
          Learn More <ArrowForwardIcon fontSize="small" />
        </Box>
      </CardContent>
    </Card>
  );
}
