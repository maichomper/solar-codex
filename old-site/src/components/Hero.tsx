import * as React from 'react';
import { Box, Typography, Link, Container, Grid } from '@mui/material';

type HeroProps = {
  // Define any props here if needed, for example:
  // title: string;
  // subTitle: string;
};

const Hero: React.FC<HeroProps> = () => {
  return (
    <Container component="section" maxWidth="md" sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h1" gutterBottom>
        Turn your vision into reality.
      </Typography>

      <Box
        component="img"
        src="/hero.png" // Replace with the path to your image
        alt="Describe the image"
        sx={{ maxWidth: '100%', height: 'auto' }}
      />

      <Typography 
        variant="body1" 
        color="textPrimary" 
        paragraph
        sx={{ textAlign: 'center', mx: 'auto', display: 'inline-block', width: '100%' }}
      >
        We help businesses design, develop, and launch impactful products that resonate with their audience using the power of visualization and AI to streamline the decision making process.{' '}
        <Link href="#" color="error">
          Schedule your free consultation today.
        </Link>
      </Typography>
    </Container>
  );
};

export default Hero;
