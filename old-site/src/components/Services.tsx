import * as React from 'react';
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
// Import your icons from MUI or your custom icons below
import ProductVisionIcon from '@mui/icons-material/Visibility';
import CodeIcon from '@mui/icons-material/Code';
import GroupIcon from '@mui/icons-material/Group';
import AdbIcon from '@mui/icons-material/Adb';
import TimelineIcon from '@mui/icons-material/Timeline';
import InsightsIcon from '@mui/icons-material/Insights';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';



// Define the type for your service data for better type checking
type ServiceItem = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const services: ServiceItem[] = [
  {
    icon: ProductVisionIcon,
    title: 'Product Vision & Strategy Development',
    description: 'We collaborate with you to translate your vision into a clear and actionable roadmap, ensuring your product aligns with market needs and sets the stage for success.'
  },
  {
    icon: CodeIcon,
    title: 'Technical Consulting & Guidance',
    description: 'Leverage our expertise in software architecture, development, and tech stack selection to build robust, scalable, and future-proof products.'
  },
  {
    icon: GroupIcon,
    title: 'Mentorship & Team Empowerment',
    description: "We invest in your team's growth, providing mentorship, leadership training, and frameworks to build high-performing and collaborative teams."
  },
  {
    icon: AdbIcon,
    title: 'AI-powered Product Discovery',
    description: 'We harness the power of AI to accelerate product discovery, gain valuable user insights, and minimize time and resource investment.'
  },
  {
    icon: InsightsIcon,
    title: 'Product Validation & Market Fit Analysis',
    description: 'Through market research and user feedback, we help you validate your product idea and ensure it resonates with your target audience, reducing risk and increasing success.'
  },
  {
    icon: CheckCircleOutlineIcon,
    title: 'Project Management & Agile Implementation',
    description: 'We help you implement effective project management practices and agile methodologies to streamline your product development process, improve efficiency, and achieve your goals faster.'
  }
  // Repeat for other services
];

const Services: React.FC = () => {
  const theme = useTheme();

  return (
    <Container component="section" maxWidth="md" sx={{ py: 8 }}>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.title}>
            <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
              <service.icon style={{ fontSize: theme.spacing(6) }} />
              <Typography variant="h6" component="h3" marginTop={2}>
                {service.title}
              </Typography>
              <Typography variant="body1">
                {service.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
