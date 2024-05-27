import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const EmailSubscription = () => {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //  logic to handle email subscription
    setSubmitted(true);
  };

  return (
    <Box sx={{ backgroundColor: '#1F1E1D', minHeight: '50vh', py: 3 }}>
      <Container maxWidth="sm" sx={{ mt: 5, color: 'white' }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Subscribe for Updates
          </Typography>
          <Typography variant="body1">
            Stay updated with the latest news and information about blood donations.
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit} sx={{ textAlign: 'center' }}>
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={handleEmailChange}
            sx={{ mb: 2, backgroundColor: 'white' }}
          />
          <Button type="submit" variant="contained" sx={{ backgroundColor: '#FF0000', color: 'white', '&:hover': { backgroundColor: '#D00000' } }} fullWidth>
            Subscribe
          </Button>
          {submitted && (
            <Typography variant="body1" color="success.main" sx={{ mt: 2 }}>
              Thank you for making a difference!
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default EmailSubscription;
