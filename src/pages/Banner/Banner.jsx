import { Box, Typography, Button, Container } from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <Box
      component='section'
      id='contact'
      sx={{
        background: '#0c0c0c',
        py: { xs: 10, md: 16 },
        position: 'relative',
        overflow: 'hidden',
        backgroundImage:
          'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    >
      {/* Glow */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '50%',
          height: '70%',
          background:
            'radial-gradient(ellipse at center, rgba(79,70,229,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth='md' sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            sx={{
              color: '#818cf8',
              fontWeight: 600,
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              mb: 2,
              textAlign: 'center',
            }}
          >
            Let&apos;s work together
          </Typography>

          <Typography
            component='h2'
            sx={{
              color: '#f5f5f5',
              fontWeight: 800,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              textAlign: 'center',
              mb: 3,
            }}
          >
            Ready to build
            <Box
              component='span'
              sx={{
                display: 'block',
                color: '#818cf8',
              }}
            >
              something great?
            </Box>
          </Typography>

          <Typography
            sx={{
              color: '#9ca3af',
              fontSize: { xs: '1rem', md: '1.1rem' },
              textAlign: 'center',
              maxWidth: '480px',
              mx: 'auto',
              lineHeight: 1.7,
              mb: 6,
            }}
          >
            Open to fullstack and frontend roles. Available for freelance. If
            you&apos;re building something that needs a strong engineer who can
            own a problem end-to-end, ship fast, and build for scale,
            let&apos;s talk.
          </Typography>

          {/* Primary CTA */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Button
              variant='contained'
              size='large'
              startIcon={<Email />}
              href='mailto:chinetaadinnu@gmail.com'
              sx={{
                bgcolor: '#4f46e5',
                color: '#fff',
                px: 4,
                py: 1.75,
                fontSize: '1rem',
                '&:hover': {
                  bgcolor: '#4338ca',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 30px rgba(79,70,229,0.4)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              chinetaadinnu@gmail.com
            </Button>
          </Box>

          {/* Secondary links */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 1,
              flexWrap: 'wrap',
            }}
          >
            <Button
              startIcon={<GitHub />}
              href='https://github.com/Netacci/'
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                color: '#6b7280',
                fontSize: '0.85rem',
                '&:hover': { color: '#f5f5f5', bgcolor: 'rgba(255,255,255,0.05)' },
              }}
            >
              GitHub
            </Button>
            <Button
              startIcon={<LinkedIn />}
              href='https://www.linkedin.com/in/chineta-adinnu/'
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                color: '#6b7280',
                fontSize: '0.85rem',
                '&:hover': { color: '#f5f5f5', bgcolor: 'rgba(255,255,255,0.05)' },
              }}
            >
              LinkedIn
            </Button>
            <Button
              href='tel:+2347018670919'
              sx={{
                color: '#6b7280',
                fontSize: '0.85rem',
                '&:hover': { color: '#f5f5f5', bgcolor: 'rgba(255,255,255,0.05)' },
              }}
            >
              +234 701 867 0919
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Banner;
