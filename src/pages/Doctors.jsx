import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const Doctors = () => {
  return (
    <Container>
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Our Doctors
        </Typography>
        <Typography variant="body1">
          Meet our experienced team of doctors.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Doctors;