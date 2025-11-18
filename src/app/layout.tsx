import type { Metadata } from 'next';
import ThemeRegistry from '@/components/ThemeRegistry';
import Header from '@/components/Header';
import SkipLinks from '@/components/common/SkipLinks';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/utils/schema';
import { michoHandwriting } from '@/styles/fonts';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://solarcodex.com'),
  title: {
    default: 'SolarCodex - AI Development & Strategic Product Consulting',
    template: '%s | SolarCodex',
  },
  description: 'Turn your vision into reality. Build digital products customers love. We help businesses design, develop, and launch impactful products using visual thinking and AI.',
  keywords: ['AI development', 'product consulting', 'strategic consulting', 'visual thinking', 'product discovery', 'AI automation', 'product strategy', 'fractional CTO'],
  authors: [{ name: 'SolarCodex' }],
  creator: 'SolarCodex',
  publisher: 'SolarCodex',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'SolarCodex',
    title: 'SolarCodex - AI Development & Strategic Product Consulting',
    description: 'Turn your vision into reality. Build digital products customers love. We help businesses design, develop, and launch impactful products using visual thinking and AI.',
    images: [
      {
        url: '/solar-codex-logo.svg',
        width: 1200,
        height: 630,
        alt: 'SolarCodex - AI Development & Strategic Product Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SolarCodex - AI Development & Strategic Product Consulting',
    description: 'Turn your vision into reality. Build digital products customers love.',
    images: ['/solar-codex-logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes here when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <html lang="en" className={michoHandwriting.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        <ThemeRegistry>
          <SkipLinks />
          <Header />
          <main id="main-content">{children}</main>
        </ThemeRegistry>
      </body>
    </html>
  );
}
