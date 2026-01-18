import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          We are dedicated to providing the best healthcare services through technology.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;