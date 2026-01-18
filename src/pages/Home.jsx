import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Hospital Management System
        </Typography>
        <Typography variant="body1">
          This system helps you manage patient information, appointments, and more.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Home;