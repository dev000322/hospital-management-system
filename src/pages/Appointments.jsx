import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const Appointments = () => {
  return (
    <Container>
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Appointments
        </Typography>
        <Typography variant="body1">
          Manage your appointments here.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Appointments;
