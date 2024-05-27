import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const quotesList = [
  "Donating blood is saving lives.",
  "Be a hero, donate blood.",
  "Your donation can make a difference.",
  "Join us in the fight against blood shortage.",
];

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotesList.length);
  return quotesList[randomIndex];
};

const BackgroundWithQuotes = () => {
  const [quote, setQuote] = useState(getRandomQuote());

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(getRandomQuote());
    }, 3000); // Change quote every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '40vh', //  size of the email subscription
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '90%',
          backgroundImage: `url('https://images.pexels.com/photos/12193090/pexels-photo-12193090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(1px)', // Blur effect
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          color: '#000',
          padding: '0 90px',
        }}
      >
        <Typography variant="h5" component="div" gutterBottom>
          "{quote}"
        </Typography>
      </Box>
    </Box>
  );
};

export default BackgroundWithQuotes;
