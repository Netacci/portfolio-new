import {
  Box,
  Typography,
  IconButton,
  Container,
  useTheme,
} from '@mui/material';
import { LinkedIn, GitHub, WhatsApp } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  const theme = useTheme();

  const socialLinks = [
    { icon: LinkedIn, url: 'https://www.linkedin.com/in/chineta-adinnu/' },
    { icon: GitHub, url: 'https://github.com/Netacci' },
    { icon: WhatsApp, url: 'https://wa.link/ymt1x8' },
  ];

  return (
    <Box
      component='footer'
      sx={{
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        py: 4,
      }}
    >
      <Container maxWidth='lg'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant='h6' align='center' gutterBottom>
            Follow me on Socials
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            {socialLinks.map((link, index) => (
              <IconButton
                key={index}
                color='inherit'
                component='a'
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                sx={{
                  mx: 1,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.2)',
                    color: theme.palette.secondary.main,
                  },
                }}
              >
                <link.icon />
              </IconButton>
            ))}
          </Box>
          <Typography
            variant='body2'
            color='inherit'
            align='center'
            sx={{ mt: 2 }}
          >
            © {new Date().getFullYear()} Netacci. All rights reserved.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
