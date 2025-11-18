'use client';

import { Box, Link } from '@mui/material';
import { usePathname } from 'next/navigation';

export default function SkipLinks() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <Box
      component="nav"
      aria-label="Skip navigation"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1300,
        '& a': {
          position: 'absolute',
          top: '-100px',
          left: 0,
          backgroundColor: 'secondary.main',
          color: 'white',
          padding: '12px 24px',
          textDecoration: 'none',
          fontWeight: 700,
          fontSize: '1rem',
          borderRadius: '0 0 4px 0',
          '&:focus': {
            top: 0,
            outline: '3px solid',
            outlineColor: 'primary.main',
            outlineOffset: '2px',
          },
        },
      }}
    >
      <Link href="#main-content" sx={{ display: 'block' }}>
        Skip to main content
      </Link>
      {isHomePage && (
        <Link href="#navigation" sx={{ display: 'block', top: '-100px' }}>
          Skip to navigation
        </Link>
      )}
    </Box>
  );
}

