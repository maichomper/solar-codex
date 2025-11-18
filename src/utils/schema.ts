export interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  contactPoint?: {
    '@type': string;
    telephone?: string;
    contactType: string;
    email?: string;
  };
  sameAs?: string[];
}

export interface WebSiteSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  potentialAction?: {
    '@type': string;
    target: {
      '@type': string;
      urlTemplate: string;
    };
    'query-input': string;
  };
}

export interface ServiceSchema {
  '@context': string;
  '@type': string;
  serviceType: string;
  provider: {
    '@type': string;
    name: string;
  };
  areaServed?: string;
  description: string;
}

export interface ArticleSchema {
  '@context': string;
  '@type': string;
  headline: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author: {
    '@type': string;
    name: string;
  };
  publisher: {
    '@type': string;
    name: string;
    logo: {
      '@type': string;
      url: string;
    };
  };
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://solarcodex.com';

export function generateOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SolarCodex',
    url: baseUrl,
    logo: `${baseUrl}/solar-codex-logo.svg`,
    description:
      'AI Development & Strategic Product Consulting. We help businesses design, develop, and launch impactful products using visual thinking and AI.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'contact@solarcodex.com',
    },
    sameAs: [
      // Add social media links when available
    ],
  };
}

export function generateWebSiteSchema(): WebSiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SolarCodex',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
}): ServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'Organization',
      name: 'SolarCodex',
    },
    description: service.description,
  };
}

export function generateArticleSchema(article: {
  headline: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}): ArticleSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image ? `${baseUrl}${article.image}` : undefined,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Organization',
      name: 'SolarCodex',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SolarCodex',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/solar-codex-logo.svg`,
      },
    },
  };
}

