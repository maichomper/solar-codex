'use client';

import { Box, Container, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp } from '@/utils/animations';
import Button from '@/components/common/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import QuizIcon from '@mui/icons-material/Quiz';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MapIcon from '@mui/icons-material/Map';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import RouteIcon from '@mui/icons-material/Route';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';

// Case study data structure
const caseStudy = {
  title: 'Therapy Management System',
  client: 'Confidential Healthcare Startup',
  duration: '8 weeks',
  role: 'Strategic Product Discovery & UX Strategy',
  tools: [
    { name: 'FigJam', icon: '🎨' },
    { name: 'Figma', icon: '✏️' },
    { name: 'Google Drive', icon: '📁' },
    { name: 'ReactJS', icon: '⚛️' },
    { name: 'NestJS', icon: '🪺' },
  ],
  processes: [
    'Double Loop Learning',
    'Inspired Framework',
    'Business Model Canvas',
    'User Journey Mapping',
    'Test-Driven Development',
  ],
  heroImage: '/illustrations/therapy-management-hero.jpg',

  phases: [
    {
      number: 1,
      title: 'Discovery Call',
      icon: PhoneIcon,
      description: 'Initial conversation with founders to understand their vision and current workflow. During the call, I sketched out their existing process in real-time to ensure we were aligned on the current state.',
      outcomes: [
        'Mapped current therapy booking and management workflow',
        'Identified key pain points in their manual process',
        'Established trust through visual collaboration',
      ],
      layout: 'side-by-side',
      images: [
        {
          src: '/illustrations/therapy-platform-discovery-call.jpg',
          alt: 'Hand-drawn process sketch from discovery call',
          caption: 'Real-time sketch created during discovery call showing current workflow',
        },
      ],
    },
    {
      number: 2,
      title: 'Founder Questionnaire',
      icon: QuizIcon,
      description: 'Sent a structured questionnaire to the founders to dive deeper into their business goals, technical constraints, and vision for the product. This helped uncover assumptions and priorities.',
      outcomes: [
        'Clarified business model and revenue expectations',
        'Identified must-have vs. nice-to-have features',
        'Understood technical and resource constraints',
      ],
    },
    {
      number: 3,
      title: 'Mystery Shopping',
      icon: StorefrontIcon,
      description: 'Went through the entire customer experience from first contact to therapy sessions. I actually took 6 therapy sessions to truly understand the user journey, pain points, and opportunities from a client\'s perspective.',
      outcomes: [
        'Experienced firsthand the booking and onboarding friction',
        'Identified critical touchpoints where clients drop off',
        'Documented the entire journey with real data and insights',
      ],
      images: [
        {
          src: '/case-studies/therapy-management/mystery-shopping.png',
          alt: 'Mystery shopping user journey documentation',
          caption: 'Complete user journey from first contact through 6 therapy sessions',
          figjamEmbed: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/board/HkfSpDm8dEhRthSaETJqJ3/User-Journeys?node-id=2002-1227',
        },
      ],
    },
    {
      number: 4,
      title: 'Collaborative Process Mapping',
      icon: MapIcon,
      description: 'Expanded on the original sketch in a FigJam board where founders could add their input. Green stickies for what they loved, red stickies for what needed attention. This created a shared understanding of priorities.',
      outcomes: [
        'Visual alignment on current vs. desired state',
        'Identified 12 critical pain points to address',
        'Built consensus on where to focus first',
      ],
      layout: 'half-and-half',
      images: [
        {
          src: '/case-studies/therapy-management/figjam-process.png',
          alt: 'FigJam board with sticky notes showing process mapping',
          caption: 'Collaborative FigJam session with founder feedback',
          figjamEmbed: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/board/VuPvSrzwg6jWTyJbjVB5Cx/La-Monta%C3%B1a-Sketch?node-id=2708-1474',
        },
      ],
    },
    {
      number: 5,
      title: 'Business Model Canvas',
      icon: BusinessCenterIcon,
      description: 'Created a comprehensive Business Model Canvas to ensure the product strategy aligned with their business goals. This helped validate assumptions about customer segments, value propositions, and revenue streams.',
      outcomes: [
        'Validated core value proposition',
        'Identified key partnerships needed',
        'Clarified customer acquisition strategy',
      ],
      images: [
        {
          src: '/case-studies/therapy-management/bmc.png',
          alt: 'Business Model Canvas',
          caption: 'Business Model Canvas defining the strategic foundation',
          figjamEmbed: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/board/gWnLYrPZfm8dm2KebpSxLL/Business-Model-Canvas?node-id=1-357',
        },
      ],
    },
    {
      number: 6,
      title: 'Customer Personas',
      icon: PeopleIcon,
      description: 'Developed detailed personas for therapists, clients, and practice managers to ensure we were building for real user needs, not assumptions.',
      outcomes: [
        'Created 3 primary personas with goals and pain points',
        'Identified distinct needs for each user type',
        'Prioritized features based on persona impact',
      ],
      images: [
        {
          src: '/illustrations/therapy-platform-personas.jpg',
          alt: 'Customer personas',
          caption: 'Therapist, Client, and Practice Manager personas',
        },
      ],
    },
    {
      number: 7,
      title: 'Right Product Team Exploration',
      icon: GroupsIcon,
      description: 'Explored what the ideal product team structure would look like for their startup phase, helping them understand roles, responsibilities, and hiring priorities.',
      outcomes: [
        'Defined product team structure for MVP phase',
        'Identified critical roles to hire vs. outsource',
        'Created a hiring roadmap aligned with product milestones',
      ],
      images: [
        {
          src: '/illustrations/therapy-platform-team.jpg',
          alt: 'Product team structure',
          caption: 'Ideal product team structure and hiring roadmap',
        },
      ],
    },
    {
      number: 8,
      title: 'User Journey Mapping',
      icon: RouteIcon,
      description: 'Mapped out detailed user journeys for each persona, from discovery to booking to post-session follow-up. This revealed opportunities for automation and delightful experiences.',
      outcomes: [
        'Created 5+ detailed user journey maps',
        'Identified 8 automation opportunities',
        'Prioritized features by journey impact',
      ],
      images: [
        {
          src: '/case-studies/therapy-management/user-journeys.png',
          alt: 'User journey maps',
          caption: 'User journey maps showing therapist and client experiences',
          figjamEmbed: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/board/HkfSpDm8dEhRthSaETJqJ3/User-Journeys?node-id=863-1035',
        },
      ],
    },
    {
      number: 9,
      title: 'Product Screenshots',
      icon: ScreenshotMonitorIcon,
      description: 'The final product delivered on the strategic vision with a clean, intuitive interface that addressed the core pain points identified during discovery.',
      outcomes: [
        'Launched MVP in 6 weeks post-discovery',
        'Achieved 85% therapist satisfaction in early testing',
        'Reduced booking time from 15 minutes to 2 minutes',
      ],
      layout: 'two-column-images',
      images: [
        {
          src: '/illustrations/therapy-platform-kpi-dashboard.png',
          alt: 'KPI Dashboard',
          caption: 'Therapist dashboard showing key performance indicators and analytics',
        },
        {
          src: '/illustrations/therapy-platform-list-patients.png',
          alt: 'Patient List',
          caption: 'Patient management interface with streamlined booking flow',
        },
      ],
    },
  ],

  impact: {
    title: 'Impact & Results',
    metrics: [
      { label: 'Time to MVP', value: '6 weeks', description: 'From discovery to launch' },
      { label: 'Booking efficiency', value: '87% faster', description: 'Reduced from 15 min to 2 min' },
      { label: 'User satisfaction', value: '85%', description: 'Therapist satisfaction score' },
      { label: 'Features validated', value: '12/12', description: 'All must-haves delivered' },
    ],
  },
};

export default function TherapyManagementCaseStudy() {
  return (
    <Box sx={{ backgroundColor: 'white' }}>
      {/* Hero Section with Floating Card */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '500px', md: '700px' },
          overflow: 'hidden',
          boxShadow: 3,
          mt: '32px', // Half the navigation bar height
        }}
      >
        {/* Hero Image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            '& img': {
              objectFit: 'cover',
              objectPosition: 'center',
            },
          }}
        >
          <Image
            src={caseStudy.heroImage}
            alt={`${caseStudy.title} - Project overview`}
            fill
            priority
          />
        </Box>

        {/* Floating Card - Corner Overlay */}
        <Container maxWidth="xl" sx={{ position: 'relative', height: '100%', zIndex: 10 }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            sx={{
              position: 'absolute',
              top: { xs: '20px', md: '40px' },
              left: { xs: '32px', md: '48px' },
              right: { xs: '32px', md: 'auto' },
              maxWidth: { xs: '100%', md: '700px' },
              backgroundColor: 'background.paper',
              p: { xs: 3, md: 4 },
              borderRadius: (theme) => theme.custom.card.borderRadius,
              boxShadow: 6,
            }}
          >
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700, fontSize: { xs: '1.5rem', md: '2rem' } }}>
              🏥 {caseStudy.title}
            </Typography>

            {/* Info Grid */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 3 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1" sx={{ mb: 1, color: 'text.secondary', fontSize: (theme) => theme.custom.text.bodyFontSize }}>
                  <strong>Client:</strong> {caseStudy.client}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1, color: 'text.secondary', fontSize: (theme) => theme.custom.text.bodyFontSize }}>
                  <strong>Duration:</strong> {caseStudy.duration}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: (theme) => theme.custom.text.bodyFontSize }}>
                  <strong>Role:</strong> {caseStudy.role}
                </Typography>
              </Box>

              <Box sx={{ flex: 1 }}>
                {/* Tools */}
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700 }}>
                  Tools Used:
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                  {caseStudy.tools.map((tool, i) => (
                    <Chip
                      key={i}
                      label={`${tool.icon} ${tool.name}`}
                      size="small"
                      sx={{ backgroundColor: 'white' }}
                    />
                  ))}
                </Box>

                {/* Processes */}
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700 }}>
                  Processes:
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {caseStudy.processes.map((process, i) => (
                    <Chip
                      key={i}
                      label={process}
                      size="small"
                      sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        fontSize: '0.75rem',
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Timeline Content */}
      <Container maxWidth="lg" sx={{ py: (theme) => theme.custom.section.padding }}>
        <Typography
          variant="h2"
          sx={{
            mb: 6,
            textAlign: 'center',
            fontWeight: 700,
          }}
        >
          Project Journey
        </Typography>

        {/* Phases */}
        {caseStudy.phases.map((phase, index) => (
          <Box
            key={phase.number}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: index * 0.1 }}
            sx={{
              mb: 8,
              '&:last-child': { mb: 0 },
            }}
          >
            {/* Phase Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
              {phase.icon && (
                <Box
                  sx={{
                    minWidth: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: 'secondary.main',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <phase.icon sx={{ fontSize: '1.5rem' }} />
                </Box>
              )}
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {phase.number}. {phase.title}
              </Typography>
            </Box>

            {/* Side-by-side layout variants */}
            {phase.layout === 'side-by-side' ? (
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, pl: { md: 8 } }}>
                {/* Left column - Content (2/3) */}
                <Box sx={{ flex: { xs: '1 1 100%', md: '2 2 66.666%' } }}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      lineHeight: (theme) => theme.custom.text.lineHeight,
                      fontSize: (theme) => theme.custom.text.bodyFontSize,
                    }}
                  >
                    {phase.description}
                  </Typography>

                  <Box sx={{ mb: 0 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: 'secondary.main' }}>
                      Key Outcomes:
                    </Typography>
                    <Box component="ul" sx={{ pl: 3, mb: 0 }}>
                      {phase.outcomes.map((outcome, i) => (
                        <Typography
                          component="li"
                          variant="body1"
                          key={i}
                          sx={{ mb: 1, lineHeight: (theme) => theme.custom.text.lineHeight }}
                        >
                          {outcome}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </Box>

                {/* Right column - Image (1/3) */}
                {phase.images && phase.images[0] && (
                  <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 33.333%' } }}>
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        height: 'auto',
                        borderRadius: (theme) => theme.custom.card.borderRadius,
                        overflow: 'hidden',
                        border: (theme) => theme.custom.card.border,
                        borderColor: 'divider',
                      }}
                    >
                      <Image
                        src={phase.images[0].src}
                        alt={phase.images[0].alt}
                        width={400}
                        height={500}
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{
                        display: 'block',
                        color: 'text.secondary',
                        fontStyle: 'italic',
                        textAlign: 'center',
                        mt: 1,
                      }}
                    >
                      {phase.images[0].caption}
                    </Typography>
                  </Box>
                )}
              </Box>
            ) : phase.layout === 'half-and-half' ? (
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, pl: { md: 8 } }}>
                {/* Left column - Content (1/2) */}
                <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 50%' } }}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      lineHeight: (theme) => theme.custom.text.lineHeight,
                      fontSize: (theme) => theme.custom.text.bodyFontSize,
                    }}
                  >
                    {phase.description}
                  </Typography>

                  <Box sx={{ mb: 0 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: 'secondary.main' }}>
                      Key Outcomes:
                    </Typography>
                    <Box component="ul" sx={{ pl: 3, mb: 0 }}>
                      {phase.outcomes.map((outcome, i) => (
                        <Typography
                          component="li"
                          variant="body1"
                          key={i}
                          sx={{ mb: 1, lineHeight: (theme) => theme.custom.text.lineHeight }}
                        >
                          {outcome}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </Box>

                {/* Right column - FigJam Embed (1/2) */}
                {phase.images && phase.images[0] && (
                  <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 50%' } }}>
                    {phase.images[0].figjamEmbed ? (
                      <Box
                        sx={{
                          border: (theme) => theme.custom.card.border,
                          borderColor: 'divider',
                          borderRadius: (theme) => theme.custom.card.borderRadius,
                          overflow: 'hidden',
                          mb: 2,
                        }}
                      >
                        <iframe
                          src={phase.images[0].figjamEmbed}
                          width="100%"
                          height="450"
                          style={{ border: 'none' }}
                          allowFullScreen
                        />
                      </Box>
                    ) : (
                      <Box
                        sx={{
                          position: 'relative',
                          width: '100%',
                          height: 'auto',
                          borderRadius: (theme) => theme.custom.card.borderRadius,
                          overflow: 'hidden',
                          border: (theme) => theme.custom.card.border,
                          borderColor: 'divider',
                        }}
                      >
                        <Image
                          src={phase.images[0].src}
                          alt={phase.images[0].alt}
                          width={600}
                          height={450}
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </Box>
                    )}
                    <Typography
                      variant="caption"
                      sx={{
                        display: 'block',
                        color: 'text.secondary',
                        fontStyle: 'italic',
                        textAlign: 'center',
                        mt: 1,
                      }}
                    >
                      {phase.images[0].caption}
                    </Typography>
                  </Box>
                )}
              </Box>
            ) : phase.layout === 'two-column-images' ? (
              <>
                {/* Description */}
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    lineHeight: (theme) => theme.custom.text.lineHeight,
                    fontSize: (theme) => theme.custom.text.bodyFontSize,
                    pl: { md: 8 },
                  }}
                >
                  {phase.description}
                </Typography>

                {/* Outcomes */}
                <Box sx={{ pl: { md: 8 }, mb: 4 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: 'secondary.main' }}>
                    Key Outcomes:
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, mb: 0 }}>
                    {phase.outcomes.map((outcome, i) => (
                      <Typography
                        component="li"
                        variant="body1"
                        key={i}
                        sx={{ mb: 1, lineHeight: (theme) => theme.custom.text.lineHeight }}
                      >
                        {outcome}
                      </Typography>
                    ))}
                  </Box>
                </Box>

                {/* Two-column images */}
                {phase.images && (
                  <Box sx={{ pl: { md: 8 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                    {phase.images.map((image, i) => (
                      <Box key={i} sx={{ flex: { xs: '1 1 100%', md: '1 1 50%' } }}>
                        <Box
                          sx={{
                            position: 'relative',
                            width: '100%',
                            height: 'auto',
                            mb: 2,
                            borderRadius: (theme) => theme.custom.card.borderRadius,
                            overflow: 'hidden',
                            border: (theme) => theme.custom.card.border,
                            borderColor: 'divider',
                          }}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={600}
                            height={450}
                            style={{ width: '100%', height: 'auto' }}
                          />
                        </Box>
                        <Typography
                          variant="caption"
                          sx={{
                            display: 'block',
                            color: 'text.secondary',
                            fontStyle: 'italic',
                            textAlign: 'center',
                          }}
                        >
                          {image.caption}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              </>
            ) : (
              <>
                {/* Description */}
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    lineHeight: (theme) => theme.custom.text.lineHeight,
                    fontSize: (theme) => theme.custom.text.bodyFontSize,
                    pl: { md: 8 },
                  }}
                >
                  {phase.description}
                </Typography>

                {/* Outcomes */}
                <Box sx={{ pl: { md: 8 }, mb: phase.images ? 4 : 0 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: 'secondary.main' }}>
                    Key Outcomes:
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, mb: 0 }}>
                    {phase.outcomes.map((outcome, i) => (
                      <Typography
                        component="li"
                        variant="body1"
                        key={i}
                        sx={{ mb: 1, lineHeight: (theme) => theme.custom.text.lineHeight }}
                      >
                        {outcome}
                      </Typography>
                    ))}
                  </Box>
                </Box>

                {/* Images / FigJam Embeds */}
                {phase.images && phase.images.map((image, i) => (
                  <Box key={i} sx={{ pl: { md: 8 }, mb: 3 }}>
                {image.figjamEmbed ? (
                  // FigJam iframe embed
                  <Box
                    sx={{
                      border: (theme) => theme.custom.card.border,
                      borderColor: 'divider',
                      borderRadius: (theme) => theme.custom.card.borderRadius,
                      overflow: 'hidden',
                      mb: 2,
                    }}
                  >
                    <iframe
                      src={image.figjamEmbed}
                      width="100%"
                      height="450"
                      style={{ border: 'none' }}
                      allowFullScreen
                    />
                  </Box>
                ) : (
                  // Regular image
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: 'auto',
                      mb: 2,
                      borderRadius: (theme) => theme.custom.card.borderRadius,
                      overflow: 'hidden',
                      border: (theme) => theme.custom.card.border,
                      borderColor: 'divider',
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={500}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </Box>
                )}
                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    color: 'text.secondary',
                    fontStyle: 'italic',
                    textAlign: 'center',
                  }}
                >
                  {image.caption}
                </Typography>
              </Box>
            ))}
              </>
            )}

            {/* Divider between phases */}
            {index < caseStudy.phases.length - 1 && (
              <Box
                sx={{
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'divider',
                  mt: 6,
                }}
              />
            )}
          </Box>
        ))}

        {/* Impact Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          sx={{
            mt: 10,
            p: (theme) => theme.custom.card.padding,
            backgroundColor: 'background.paper',
            borderRadius: (theme) => theme.custom.card.borderRadius,
            textAlign: 'center',
          }}
        >
          <Typography variant="h3" sx={{ mb: 4, fontWeight: 700 }}>
            {caseStudy.impact.title}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4,
              justifyContent: 'center',
            }}
          >
            {caseStudy.impact.metrics.map((metric, i) => (
              <Box key={i} sx={{ flex: { xs: '1 1 100%', sm: '0 0 45%', md: '0 0 22%' } }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    color: 'secondary.main',
                    mb: 1,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                  }}
                >
                  {metric.value}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                  {metric.label}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {metric.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* CTA */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            Ready to transform your product idea?
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => window.location.href = '/#contact'}
          >
            Start Your Discovery 🚀
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
