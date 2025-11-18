import React from 'react';
import { Box, Container, Typography, Link, Paper } from '@mui/material';

const WhyUs = () => {
  return (
    <Paper style={{ background: '#F5F5F5', padding: '4em 0' }} elevation={0}>
      <Container>
        <Box textAlign="center" marginBottom="2em">
          <Typography variant="h4" component="h2" gutterBottom>
            Why Us?
          </Typography>
          <Typography variant="subtitle1" paragraph>
            We believe that technology shouldn't be a barrier, but a bridge to creating impactful and user-centric digital products.
          </Typography>
          <Typography variant="body1" paragraph>
            Our mission is to bridge this gap by leveraging the power of visual thinking and strategic planning. We use visual tools and techniques to foster creativity, collaboration, and a deep understanding of user needs. This allows us to guide businesses through the entire product development process, from vision conceptualization to launch and beyond.
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default WhyUs;
