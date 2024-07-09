import { Email, PhoneInTalk } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

const Banner = () => {
  return (
    <Box sx={{ background: '#edf2f4' }} id='contact'>
      <Box sx={{ px: { lg: 5, xs: 2 }, textAlign: 'center', py: 5 }}>
        <Typography
          sx={{ color: '#d90429', fontSize: '1rem', fontWeight: '600' }}
        >
          I&apos;m available for freelance and full time roles
        </Typography>
        <Typography
          sx={{
            color: '#8d99ae',
            fontSize: '2.5rem',
            fontWeight: '900',
            mt: '10px',
          }}
        >
          Let&apos;s talk ..
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { lg: 'row', xs: 'column' },
            gap: 1,
            justifyContent: 'center',
            mt: '10px',
          }}
        >
          <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            {' '}
            <PhoneInTalk sx={{ color: '#d90429' }} />{' '}
            <Typography
              sx={{ color: '#2b2d42', fontWeight: '900' }}
              component={'a'}
              href='tel:+2347018670919'
            >
              +234 701 867 0919
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <Email sx={{ color: '#d90429' }} />
            <Typography
              sx={{ color: '#2b2d42', fontWeight: '900' }}
              component={'a'}
              href='mailto:chinetaadinnu@gmail.com'
            >
              chinetaadinnu@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
