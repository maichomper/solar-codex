'use client';

import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { motion } from 'framer-motion';

interface ButtonProps extends MuiButtonProps {
  children: React.ReactNode;
}

export default function Button({ children, variant = 'contained', color = 'secondary', href, ...props }: ButtonProps) {
  const isLink = Boolean(href);

  return (
    <MuiButton
      component={isLink ? motion.a : motion.button}
      href={href}
      target={isLink ? '_blank' : undefined}
      rel={isLink ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      variant={variant}
      color={color}
      sx={{
        px: 4,
        py: 1.5,
        fontSize: '1.125rem',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        boxShadow: variant === 'contained' ? 3 : 0,
        '&:hover': {
          boxShadow: variant === 'contained' ? 6 : 0,
        },
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
}
