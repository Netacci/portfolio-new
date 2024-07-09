import { GitHub, LinkedIn, WhatsApp } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ background: '#2B2D42' }}>
      <Box sx={{ px: { lg: 5, xs: 2 }, py: '30px', textAlign: 'center' }}>
        <Typography sx={{ color: '#ffffff' }}>Follow me on Socials</Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            mt: '10px',
          }}
        >
          <LinkedIn
            sx={{ color: '#ffffff', cursor: 'pointer' }}
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/chineta-adinnu/',
                '_blank'
              )
            }
          />
          <GitHub
            sx={{ color: '#ffffff', cursor: 'pointer' }}
            onClick={() => window.open('https://github.com/Netacci', '_blank')}
          />
          <WhatsApp
            sx={{ color: '#ffffff', cursor: 'pointer' }}
            onClick={() => window.open('https://wa.link/ymt1x8', '_blank')}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
