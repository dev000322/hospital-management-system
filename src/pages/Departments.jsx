import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const Departments = () => {
  return (
    <Container>
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Departments
        </Typography>
        <Typography variant="body1">
          Explore our various departments.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Departments;