import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1">
          For any inquiries, please email us at contact@hospital.com.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Contact;