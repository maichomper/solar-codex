import { createTheme } from '@mui/material/styles';

// Declare custom theme properties
declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      hero: {
        headlineFontSize: { xs: string; md: string };
        descriptionFontSize: { xs: string; md: string };
        spacing: number;
        maxWidth: { xs: string; md: string };
        imageMaxWidth: { xs: string; md: string };
      };
      section: {
        padding: { xs: string; md: string };
        headingMarginBottom: number;
        gap: { xs: number; md: number };
      };
      card: {
        padding: number;
        borderRadius: number;
        border: string;
        dashedBorder: string;
      };
      text: {
        lineHeight: number;
        bodyFontSize: { xs: string; md: string };
        bodyFontSizeSmall: { xs: string; md: string };
        sectionHeadingSize: { xs: string; md: string };
        marginBottom: { small: number; medium: number; large: number };
      };
      processStep: {
        circleSize: number;
        emojiSize: string;
        backgroundColor: string;
      };
      button: {
        padding: { xs: number; md: number };
        fontSize: string;
      };
    };
  }
  interface ThemeOptions {
    custom?: {
      hero?: {
        headlineFontSize?: { xs: string; md: string };
        descriptionFontSize?: { xs: string; md: string };
        spacing?: number;
        maxWidth?: { xs: string; md: string };
        imageMaxWidth?: { xs: string; md: string };
      };
      section?: {
        padding?: { xs: string; md: string };
        headingMarginBottom?: number;
        gap?: { xs: number; md: number };
      };
      card?: {
        padding?: number;
        borderRadius?: number;
        border?: string;
        dashedBorder?: string;
      };
      text?: {
        lineHeight?: number;
        bodyFontSize?: { xs: string; md: string };
        bodyFontSizeSmall?: { xs: string; md: string };
        sectionHeadingSize?: { xs: string; md: string };
        marginBottom?: { small: number; medium: number; large: number };
      };
      processStep?: {
        circleSize?: number;
        emojiSize?: string;
        backgroundColor?: string;
      };
      button?: {
        padding?: { xs: number; md: number };
        fontSize?: string;
      };
    };
  }
}

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '32px',
          paddingRight: '32px',
          '@media (min-width: 900px)': {
            paddingLeft: '48px',
            paddingRight: '48px',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#000000', // Black
    },
    secondary: {
      main: '#FF0000', // Red accent
    },
    background: {
      default: '#FFFFFF',
      paper: '#FAFAFA',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 800,
      lineHeight: 1.2,
      '@media (max-width:768px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
      '@media (max-width:768px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.3,
      '@media (max-width:768px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1.8rem',
      lineHeight: 1.6,
      '@media (max-width:768px)': {
        fontSize: '1.25rem',
      },
    },
  },
  custom: {
    hero: {
      headlineFontSize: { xs: '2.5rem', md: '4rem' },
      descriptionFontSize: { xs: '1.25rem', md: '1.8rem' },
      spacing: 3, // mb: 3 = 24px
      maxWidth: { xs: '100%', md: '1600px' },
      imageMaxWidth: { xs: '100%', md: '1200px' },
    },
    section: {
      padding: { xs: '64px', md: '96px' }, // py: { xs: 8, md: 12 }
      headingMarginBottom: 4, // mb: 4 = 32px
      gap: { xs: 4, md: 6 }, // Consistent gap between elements
    },
    card: {
      padding: 4, // p: 4 = 32px
      borderRadius: 2, // 16px
      border: '1px solid',
      dashedBorder: '2px dashed',
    },
    text: {
      lineHeight: 1.8,
      bodyFontSize: { xs: '1rem', md: '1.125rem' },
      bodyFontSizeSmall: { xs: '0.95rem', md: '1rem' },
      sectionHeadingSize: { xs: '1.75rem', md: '2rem' },
      marginBottom: {
        small: 2,   // 16px
        medium: 3,  // 24px
        large: 4,   // 32px
      },
    },
    processStep: {
      circleSize: 48, // 48px
      emojiSize: '1.5rem',
      backgroundColor: 'rgba(255, 0, 0, 0.08)',
    },
    button: {
      padding: { xs: 2, md: 3 }, // Consistent button padding
      fontSize: '1rem',
    },
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.05)',
    '0px 4px 8px rgba(0, 0, 0, 0.08)',
    '0px 8px 16px rgba(0, 0, 0, 0.12)',
    '0px 12px 24px rgba(0, 0, 0, 0.15)',
    '0px 16px 32px rgba(0, 0, 0, 0.18)',
    '0px 20px 40px rgba(0, 0, 0, 0.20)',
    '0px 24px 48px rgba(0, 0, 0, 0.22)',
    '0px 2px 4px rgba(0, 0, 0, 0.05)',
    '0px 4px 8px rgba(0, 0, 0, 0.08)',
    '0px 8px 16px rgba(0, 0, 0, 0.12)',
    '0px 12px 24px rgba(0, 0, 0, 0.15)',
    '0px 16px 32px rgba(0, 0, 0, 0.18)',
    '0px 20px 40px rgba(0, 0, 0, 0.20)',
    '0px 24px 48px rgba(0, 0, 0, 0.22)',
    '0px 2px 4px rgba(0, 0, 0, 0.05)',
    '0px 4px 8px rgba(0, 0, 0, 0.08)',
    '0px 8px 16px rgba(0, 0, 0, 0.12)',
    '0px 12px 24px rgba(0, 0, 0, 0.15)',
    '0px 16px 32px rgba(0, 0, 0, 0.18)',
    '0px 20px 40px rgba(0, 0, 0, 0.20)',
    '0px 24px 48px rgba(0, 0, 0, 0.22)',
    '0px 2px 4px rgba(0, 0, 0, 0.05)',
    '0px 4px 8px rgba(0, 0, 0, 0.08)',
    '0px 8px 16px rgba(0, 0, 0, 0.12)',
  ],
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
});

export default theme;
