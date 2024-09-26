import React from 'react';
import { Box, Typography, Button, Container, useTheme } from '@mui/material';
import { PhoneInTalk, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';
const Banner = () => {
  const theme = useTheme();
  return (
    <Box
      component='section'
      sx={{
        background: theme.palette.background.paper,
        py: 8,
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
      id='contact'
    >
      <Container maxWidth='md'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant='h6'
            align='center'
            color='primary'
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            I'm available for freelance and full-time roles
          </Typography>
          <Typography
            variant='h3'
            align='center'
            color='text.primary'
            gutterBottom
            sx={{ fontWeight: 900, my: 2 }}
          >
            Let's talk...
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
              gap: 3,
              mt: 4,
            }}
          >
            <Button
              variant='outlined'
              color='primary'
              startIcon={<PhoneInTalk />}
              href='tel:+2347018670919'
              sx={{
                borderRadius: 2,
                px: 3,
                py: 1,
                fontWeight: 'bold',
                '&:hover': { transform: 'translateY(-2px)' },
              }}
            >
              +234 701 867 0919
            </Button>
            <Button
              variant='outlined'
              color='primary'
              startIcon={<Email />}
              href='mailto:chinetaadinnu@gmail.com'
              sx={{
                borderRadius: 2,
                px: 3,
                py: 1,
                fontWeight: 'bold',
                '&:hover': { transform: 'translateY(-2px)' },
              }}
            >
              chinetaadinnu@gmail.com
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Banner;
