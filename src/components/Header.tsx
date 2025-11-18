'use client';

import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useTheme } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Why SolarCodex?', href: '/#why-solarcodex' },
  { label: 'What We Do', href: '/services' },
  { label: 'How We Work', href: '/#how-we-work' },
  { label: 'Case Studies', href: '/#case-studies' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();
  const theme = useTheme();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Handle Escape key to close drawer
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (mobileOpen) {
      document.addEventListener('keydown', handleEscape);
      // Focus trap: focus first focusable element in drawer
      const firstFocusable = drawerRef.current?.querySelector('a, button, [tabindex]:not([tabindex="-1"])') as HTMLElement;
      firstFocusable?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [mobileOpen]);

  // Return focus to menu button when drawer closes
  useEffect(() => {
    if (!mobileOpen && menuButtonRef.current) {
      menuButtonRef.current.focus();
    }
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);

    // Check if it's an anchor link on the home page
    if (href.startsWith('/#')) {
      const anchor = href.substring(2); // Remove '/#'

      // If we're already on home page, just scroll
      if (pathname === '/') {
        const element = document.getElementById(anchor);
        element?.scrollIntoView({ behavior: 'smooth' });
        // Update active section immediately
        setActiveSection(`#${anchor}`);
        // Update URL hash without triggering navigation
        window.history.pushState({}, '', href);
      } else {
        // Navigate to home page with anchor
        window.location.href = href;
      }
    } else {
      // Regular navigation
      window.location.href = href;
    }
  };

  // Track active section based on URL hash and scroll position
  useEffect(() => {
    const updateActiveSection = () => {
      setActiveSection(window.location.hash);
    };

    // Set initial active section
    updateActiveSection();

    // Listen for hash changes
    window.addEventListener('hashchange', updateActiveSection);

    return () => {
      window.removeEventListener('hashchange', updateActiveSection);
    };
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    if (pathname !== '/') return;

    const sections = ['why-solarcodex', 'services', 'how-we-work', 'case-studies', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            const hash = `#${sectionId}`;
            if (activeSection !== hash) {
              setActiveSection(hash);
              window.history.replaceState({}, '', `/#${sectionId}`);
            }
            return;
          }
        }
      }

      // If at top of page, clear active section
      if (window.scrollY < 100) {
        setActiveSection('');
        window.history.replaceState({}, '', '/');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, activeSection]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' && activeSection === '';
    }
    if (href.startsWith('/#')) {
      const hash = href.substring(1); // Remove the leading '/'
      return pathname === '/' && activeSection === hash;
    }
    return pathname === href;
  };

  const drawer = (
    <Box sx={{ width: 250 }} ref={drawerRef} role="navigation" aria-label="Main navigation">
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton
          onClick={handleDrawerToggle}
          aria-label="Close navigation menu"
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List role="list">
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding role="listitem">
            <ListItemButton onClick={() => handleNavClick(item.href)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2 }}>
        <Button
          onClick={() => handleNavClick('/#contact')}
          variant="contained"
          color="secondary"
          fullWidth
          sx={{
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1rem',
            py: 1.5,
            borderRadius: 2,
          }}
        >
          Work With Us
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Spacer to prevent content from hiding behind fixed AppBar */}
      <Box sx={{ height: '64px' }} />

      <AppBar
        position="fixed"
        elevation={2}
        sx={{
          backgroundColor: 'white',
          color: 'text.primary',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo */}
          <Box
            component="a"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/');
            }}
            sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
            aria-label="SolarCodex home"
          >
            <Image
              src="/solar-codex-logo.svg"
              alt="SolarCodex"
              width={90}
              height={90}
              style={{ width: '45px', height: '45px' }}
              priority
            />
          </Box>

          {/* Desktop Navigation */}
          <Box
            component="nav"
            id="navigation"
            aria-label="Main navigation"
            sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}
          >
            {navItems.slice(1).map((item) => (
              <Button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                sx={{
                  color: isActive(item.href) ? 'secondary.main' : 'text.primary',
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: '1rem',
                  borderBottom: isActive(item.href) ? '2px solid' : '2px solid transparent',
                  borderColor: isActive(item.href) ? 'secondary.main' : 'transparent',
                  borderRadius: 0,
                  pb: 0.5,
                  '&:hover': {
                    color: 'secondary.main',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}

            {/* CTA Button */}
            <Button
              onClick={() => handleNavClick('/#contact')}
              variant="contained"
              color="secondary"
              sx={{
                ml: 2,
                textTransform: 'none',
                fontWeight: 700,
                fontSize: '1rem',
                px: 3,
                py: 1,
                borderRadius: 2,
                boxShadow: 2,
                '&:hover': {
                  boxShadow: 4,
                },
              }}
            >
              Work With Us
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            ref={menuButtonRef}
            color="inherit"
            aria-label="open navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        id="mobile-navigation"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
