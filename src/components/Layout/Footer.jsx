import { Box, Typography, IconButton, Container } from '@mui/material';
import { LinkedIn, GitHub, WhatsApp } from '@mui/icons-material';

const socialLinks = [
  { icon: LinkedIn, url: 'https://www.linkedin.com/in/chineta-adinnu/', label: 'LinkedIn' },
  { icon: GitHub, url: 'https://github.com/Netacci', label: 'GitHub' },
  { icon: WhatsApp, url: 'https://wa.link/ymt1x8', label: 'WhatsApp' },
];

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: '#0c0c0c',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        py: 4,
      }}
    >
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            sx={{ color: '#4b5563', fontSize: '0.85rem' }}
          >
            &copy; {new Date().getFullYear()} Chineta Adinnu.
          </Typography>

          <Box sx={{ display: 'flex', gap: 0.5 }}>
            {socialLinks.map((link) => (
              <IconButton
                key={link.label}
                component='a'
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={link.label}
                sx={{
                  color: '#4b5563',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: '#f5f5f5', backgroundColor: 'rgba(255,255,255,0.06)' },
                }}
              >
                <link.icon sx={{ fontSize: '1.2rem' }} />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
