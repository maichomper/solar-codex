'use client';

import { Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, slideInLeft, slideInRight } from '@/utils/animations';
import Button from '@/components/common/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const services = [
  {
    id: 'strategic-discovery',
    title: 'Strategic Product Discovery',
    tagline: 'Validate ideas before you build',
    icon: '🎯',
    description: 'Stop building features nobody wants. Our strategic discovery process helps you identify what truly matters to your users and business, ensuring you invest time and resources in the right direction.',
    idealFor: [
      'Startups defining their MVP',
      'Companies exploring new market opportunities',
      'Product teams stuck in feature factory mode',
      'Executives seeking strategic product direction',
    ],
    included: [
      'Visual impact mapping sessions',
      'User story mapping and prioritization',
      'Competitive analysis and market positioning',
      'Opportunity cost analysis',
      'Strategic roadmap development',
    ],
    deliverables: [
      'Visual product strategy map',
      'Prioritized feature backlog with impact scores',
      'User journey maps and personas',
      'Executive summary with recommendations',
      'Implementation roadmap with milestones',
    ],
    timeline: 'Typically 2-4 weeks, depending on scope and complexity',
    successMetrics: [
      'Clear strategic direction aligned with business goals',
      'Confident prioritization decisions backed by data',
      'Reduced risk of building the wrong product',
      'Unified team vision and reduced internal debates',
      'Faster time-to-market with focused execution',
    ],
    processSteps: [
      { emoji: '🔍', step: 'Discovery', desc: 'Understand goals, users, and constraints' },
      { emoji: '🗺️', step: 'Mapping', desc: 'Visual impact and user story mapping' },
      { emoji: '📊', step: 'Analysis', desc: 'Competitive research and opportunity assessment' },
      { emoji: '⚖️', step: 'Prioritization', desc: 'Score and rank features by impact' },
      { emoji: '🚀', step: 'Roadmap', desc: 'Deliver strategic plan and next steps' },
    ],
  },
  {
    id: 'ai-development',
    title: 'AI Agent Development & Integration',
    tagline: 'Intelligent automation that delivers ROI',
    icon: '🤖',
    description: 'Transform repetitive workflows into intelligent automation. We build custom AI agents that integrate seamlessly with your existing systems, freeing your team to focus on high-value work.',
    idealFor: [
      'Businesses looking to automate repetitive tasks',
      'Companies wanting to enhance customer experience with AI',
      'Teams seeking to scale operations without headcount',
      'Organizations exploring AI opportunities',
    ],
    included: [
      'AI opportunity mapping (our signature process)',
      'Custom AI agent development',
      'Integration with existing systems',
      'Training and handoff',
      'Post-launch optimization',
    ],
    deliverables: [
      'AI Radar Opportunity Map (visual automation roadmap)',
      'Custom-built AI agents/workflows',
      'Integration documentation',
      'Team training materials',
      'Performance metrics dashboard',
    ],
    timeline: '4-8 weeks for initial development, ongoing optimization available',
    successMetrics: [
      'Significant reduction in manual, repetitive work',
      'Improved accuracy and consistency in operations',
      'Scalable processes that grow with your business',
      'Clear visibility into automation ROI',
      'Team empowerment to focus on strategic initiatives',
    ],
    processSteps: [
      { emoji: '🎯', step: 'Opportunity Mapping', desc: 'Identify high-impact automation areas' },
      { emoji: '✏️', step: 'Design', desc: 'Define agent capabilities and workflows' },
      { emoji: '⚙️', step: 'Development', desc: 'Build and train custom AI agents' },
      { emoji: '🔌', step: 'Integration', desc: 'Connect with your existing tools' },
      { emoji: '📈', step: 'Optimize', desc: 'Monitor, refine, and expand capabilities' },
    ],
  },
  {
    id: 'team-optimization',
    title: 'Team & Process Optimization',
    tagline: 'Build better products, faster',
    icon: '⚙️',
    description: 'Great products require great processes. We help teams streamline workflows, adopt proven frameworks, and establish sustainable rhythms that drive consistent delivery without burnout.',
    idealFor: [
      'Growing teams struggling with coordination',
      'Companies experiencing delivery bottlenecks',
      'Organizations adopting remote/hybrid work',
      'Teams wanting to implement modern frameworks (OKRs, Agile, etc.)',
    ],
    included: [
      'Process audit and visualization',
      'Team workflow design',
      'Framework implementation (OKRs, Traction/EOS, Agile)',
      'Tooling recommendations and setup',
      'Ongoing coaching and support',
    ],
    deliverables: [
      'Visual process maps (current state vs. future state)',
      'Documented workflows and playbooks',
      'OKR/goal framework setup',
      'Team collaboration toolkit',
      'Quarterly check-ins and refinement',
    ],
    timeline: 'Initial setup: 2-3 weeks; ongoing coaching available',
    successMetrics: [
      'Improved team alignment and communication',
      'Reduced coordination overhead and meeting time',
      'Predictable delivery cadence',
      'Higher team morale and reduced burnout',
      'Clear visibility into progress and blockers',
    ],
    processSteps: [
      { emoji: '🔍', step: 'Audit', desc: 'Map current processes and pain points' },
      { emoji: '🎨', step: 'Design', desc: 'Create optimized workflows and frameworks' },
      { emoji: '🚀', step: 'Implement', desc: 'Roll out new processes with training' },
      { emoji: '🤝', step: 'Coach', desc: 'Support team adoption and refinement' },
      { emoji: '🔄', step: 'Iterate', desc: 'Continuous improvement based on feedback' },
    ],
  },
  {
    id: 'fractional-cto',
    title: 'Fractional CTO Services',
    tagline: 'Strategic tech leadership on demand',
    icon: '👨‍💻',
    description: 'Get executive-level technology guidance without the full-time commitment. Perfect for startups and growing companies that need strategic tech leadership to make smart decisions and scale effectively.',
    idealFor: [
      'Startups not ready for a full-time CTO',
      'Non-technical founders needing tech guidance',
      'Companies scaling their engineering teams',
      'Businesses requiring strategic tech decisions',
    ],
    included: [
      'Technology strategy and architecture guidance',
      'Technical due diligence for investments/partnerships',
      'Engineering team mentorship and hiring support',
      'Vendor and tool evaluation',
      'Long-term technical roadmap development',
    ],
    deliverables: [
      'Technology strategy document',
      'Architecture decision records (ADRs)',
      'Engineering hiring playbook',
      'Tech stack recommendations',
      'Monthly strategic reviews',
    ],
    timeline: 'Ongoing engagement (typically 10-20 hours/month)',
    successMetrics: [
      'Confident technology decisions aligned with business goals',
      'Reduced technical debt and improved architecture',
      'Stronger engineering team and culture',
      'Better vendor relationships and tool choices',
      'Clear technical roadmap supporting business growth',
    ],
    processSteps: [
      { emoji: '🔎', step: 'Assessment', desc: 'Evaluate current tech landscape' },
      { emoji: '📋', step: 'Strategy', desc: 'Define technology vision and roadmap' },
      { emoji: '⚡', step: 'Execution', desc: 'Guide implementation and decisions' },
      { emoji: '👥', step: 'Mentorship', desc: 'Support and grow engineering team' },
      { emoji: '📊', step: 'Review', desc: 'Regular check-ins and course corrections' },
    ],
  },
];

export default function ServicesPageClient() {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <Box sx={{ backgroundColor: 'white' }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: (theme) => theme.custom.section.padding,
          backgroundColor: 'background.paper',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="xl">
          <Box component={motion.div} variants={fadeInUp} initial="hidden" animate="visible">
            <Typography
              variant="h1"
              component="h1"
              sx={{
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                fontFamily: (theme) => theme.custom.fonts.handwriting,
              }}
            >
              Our Services
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: '1.25rem',
                color: 'text.secondary',
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              We help you build the right products through strategic discovery, intelligent
              automation, and proven frameworks. Every engagement is tailored to your unique needs
              and challenges.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Service Sections */}
      {services.map((service, index) => (
        <Box
          key={service.id}
          id={service.id}
          component="section"
          sx={{
            py: (theme) => theme.custom.section.padding,
            backgroundColor: index % 2 === 0 ? 'white' : 'background.paper',
          }}
        >
          <Container maxWidth="xl">
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                gap: { xs: 4, md: 8 },
                alignItems: { xs: 'center', md: 'flex-start' },
              }}
            >
              {/* Content Side */}
              <Box
                component={motion.div}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                sx={{ flex: 1 }}
              >
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    mb: 2,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    fontWeight: 700,
                    fontFamily: (theme) => theme.custom.fonts.handwriting,
                  }}
                >
                  {service.icon} {service.title}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    fontSize: '1.25rem',
                    color: 'text.secondary',
                    fontWeight: 400,
                  }}
                >
                  {service.tagline}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    fontSize: '1.125rem',
                    lineHeight: 1.8,
                    color: 'text.primary',
                  }}
                >
                  {service.description}
                </Typography>

                {/* Timeline */}
                <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AccessTimeIcon sx={{ color: 'secondary.main' }} />
                  <Typography variant="body2" sx={{ fontSize: '1rem', fontWeight: 600 }}>
                    Timeline:
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: '1rem', color: 'text.secondary' }}>
                    {service.timeline}
                  </Typography>
                </Box>

                {/* Success Metrics */}
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <TrendingUpIcon sx={{ color: 'secondary.main' }} />
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      What You'll Achieve
                    </Typography>
                  </Box>
                  <List dense>
                    {service.successMetrics.map((metric, i) => (
                      <ListItem key={i} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon sx={{ fontSize: '1.25rem', color: 'secondary.main' }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={metric}
                          primaryTypographyProps={{ fontSize: '1rem' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                <Button onClick={scrollToContact}>Start a Conversation 💬</Button>
              </Box>

              {/* Process Diagram Side */}
              <Box
                component={motion.div}
                variants={index % 2 === 0 ? slideInRight : slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                sx={{ flex: 1 }}
              >
                <Box
                  sx={{
                    p: 4,
                    backgroundColor: 'white',
                    borderRadius: 2,
                    boxShadow: 3,
                    border: '2px solid',
                    borderColor: 'grey.200',
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, textAlign: 'center' }}>
                    Our Process
                  </Typography>

                  {/* Process Steps */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {service.processSteps.map((process, i) => (
                      <Box key={i}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            p: 2,
                            backgroundColor: 'background.paper',
                            borderRadius: 1,
                            border: '1px solid',
                            borderColor: 'grey.300',
                          }}
                        >
                          <Box
                            sx={{
                              minWidth: (theme) => theme.custom.processStep.circleSize,
                              height: (theme) => theme.custom.processStep.circleSize,
                              borderRadius: '50%',
                              backgroundColor: (theme) => theme.custom.processStep.backgroundColor,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: (theme) => theme.custom.processStep.emojiSize,
                            }}
                          >
                            {process.emoji}
                          </Box>
                          <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                              {i + 1}. {process.step}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              {process.desc}
                            </Typography>
                          </Box>
                        </Box>
                        {i < service.processSteps.length - 1 && (
                          <Box
                            sx={{
                              width: 2,
                              height: 16,
                              backgroundColor: 'grey.300',
                              mx: 'auto',
                              ml: 6,
                            }}
                          />
                        )}
                      </Box>
                    ))}
                  </Box>

                  {/* Expandable Details */}
                  <Box sx={{ mt: 4 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ mb: 2, fontWeight: 700, color: 'text.secondary' }}
                    >
                      Ideal For:
                    </Typography>
                    <List dense>
                      {service.idealFor.map((item, i) => (
                        <ListItem key={i} sx={{ py: 0.25, pl: 0 }}>
                          <ListItemText
                            primary={`• ${item}`}
                            primaryTypographyProps={{ fontSize: '0.9rem', color: 'text.secondary' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Deliverables & What's Included - Full Width Below */}
            <Box
              component={motion.div}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              sx={{
                mt: 6,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4,
              }}
            >
              {/* What's Included */}
              <Box
                sx={{
                  flex: 1,
                  p: 4,
                  backgroundColor: 'white',
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'grey.300',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                  What's Included
                </Typography>
                <List>
                  {service.included.map((item, i) => (
                    <ListItem key={i} sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckCircleIcon sx={{ fontSize: '1.25rem', color: 'primary.main' }} />
                      </ListItemIcon>
                      <ListItemText primary={item} primaryTypographyProps={{ fontSize: '1rem' }} />
                    </ListItem>
                  ))}
                </List>
              </Box>

              {/* Deliverables */}
              <Box
                sx={{
                  flex: 1,
                  p: 4,
                  backgroundColor: 'white',
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'grey.300',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                  Deliverables
                </Typography>
                <List>
                  {service.deliverables.map((item, i) => (
                    <ListItem key={i} sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckCircleIcon sx={{ fontSize: '1.25rem', color: 'primary.main' }} />
                      </ListItemIcon>
                      <ListItemText primary={item} primaryTypographyProps={{ fontSize: '1rem' }} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Container>
        </Box>
      ))}

      {/* CTA Section */}
      <Box
        sx={{
          py: (theme) => theme.custom.section.padding,
          backgroundColor: 'grey.900',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="xl">
          <Box component={motion.div} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Typography variant="h2" sx={{ mb: 3, fontWeight: 800, color: 'white', fontFamily: (theme) => theme.custom.fonts.handwriting }}>
              Ready to Get Started?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, fontSize: '1.25rem', color: 'grey.300' }}>
              Let's discuss which service is the best fit for your needs. Book a free consultation
              or send us a message.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                color="secondary"
                href="https://calendly.com/micho-draws/30min"
              >
                Book Free Consultation 📅
              </Button>
              <Button variant="outlined" color="secondary" onClick={scrollToContact}>
                Contact Us 💬
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

