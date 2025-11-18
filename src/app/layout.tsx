import type { Metadata } from 'next';
import ThemeRegistry from '@/components/ThemeRegistry';
import Header from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'SolarCodex - AI Development & Strategic Product Consulting',
  description: 'Turn your vision into reality. Build digital products customers love. We help businesses design, develop, and launch impactful products using visual thinking and AI.',
  keywords: ['AI development', 'product consulting', 'strategic consulting', 'visual thinking', 'product discovery'],
  authors: [{ name: 'SolarCodex' }],
  openGraph: {
    title: 'SolarCodex - AI Development & Strategic Product Consulting',
    description: 'Turn your vision into reality. Build digital products customers love.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
