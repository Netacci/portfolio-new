import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowDownward } from '@mui/icons-material';

const Hero = () => {
  return (
    <Box
      id='home'
      sx={{
        background: '#0c0c0c',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage:
          'radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    >
      {/* Subtle gradient glow */}
      <Box
        sx={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '60%',
          height: '70%',
          background:
            'radial-gradient(ellipse at center, rgba(79,70,229,0.15) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth='lg' sx={{ pt: { xs: 14, md: 0 }, pb: { xs: 8, md: 0 }, position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            sx={{
              color: '#818cf8',
              fontWeight: 500,
              fontSize: { xs: '0.9rem', md: '1rem' },
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              mb: 2.5,
            }}
          >
            Hi, I&apos;m Chineta
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Typography
            component='h1'
            sx={{
              color: '#f5f5f5',
              fontWeight: 800,
              fontSize: { xs: '2.8rem', sm: '4rem', md: '5.5rem', lg: '6.5rem' },
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              mb: 1,
            }}
          >
            Fullstack Engineer
          </Typography>
          <Typography
            component='h1'
            sx={{
              color: '#818cf8',
              fontWeight: 800,
              fontSize: { xs: '2.8rem', sm: '4rem', md: '5.5rem', lg: '6.5rem' },
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              mb: 4,
            }}
          >
            building systems
            <Box component='span' sx={{ color: '#f5f5f5' }}>
              {' '}
              that scale.
            </Box>
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography
            sx={{
              color: '#9ca3af',
              fontSize: { xs: '1rem', md: '1.15rem' },
              maxWidth: '580px',
              lineHeight: 1.7,
              mb: 5,
            }}
          >
            5+ years in tech &middot; TypeScript &middot; React &middot; ExpressJs &middot; NestJS &middot; Vue.js. Currently
            at{' '}
            <Box component='span' sx={{ color: '#e5e7eb', fontWeight: 500 }}>
              cimpleDev
            </Box>
            , building{' '}
            <Box
              component='a'
              href='https://hxc.ng/'
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                color: '#818cf8',
                fontWeight: 500,
                textDecoration: 'none',
                borderBottom: '1px solid rgba(129,140,248,0.4)',
                '&:hover': { borderBottomColor: '#818cf8' },
              }}
            >
              HXConnect
            </Box>
            {' '}— making healthcare accessible across Nigeria. 50+ microservices,
            6 frontend portals. Previously at{' '}
            <Box component='span' sx={{ color: '#e5e7eb', fontWeight: 500 }}>
              Mozilla
            </Box>
            ,{' '}
            <Box component='span' sx={{ color: '#e5e7eb', fontWeight: 500 }}>
              Turing
            </Box>
            , and{' '}
            <Box component='span' sx={{ color: '#e5e7eb', fontWeight: 500 }}>
              Parivest
            </Box>
            .
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant='contained'
              size='large'
              href='#work'
              sx={{
                bgcolor: '#4f46e5',
                color: '#fff',
                px: 3.5,
                py: 1.5,
                fontSize: '0.95rem',
                '&:hover': {
                  bgcolor: '#4338ca',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              See My Work
            </Button>
            <Button
              variant='outlined'
              size='large'
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/1P7yXtSQ1rZoTuSiuTKSBVLZ2ZAzVnt3Q/view?usp=sharing',
                  '_blank'
                )
              }
              sx={{
                borderColor: 'rgba(255,255,255,0.2)',
                color: '#e5e7eb',
                px: 3.5,
                py: 1.5,
                fontSize: '0.95rem',
                '&:hover': {
                  borderColor: 'rgba(255,255,255,0.5)',
                  bgcolor: 'rgba(255,255,255,0.05)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              View Resume
            </Button>
          </Box>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '36px',
          right: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Typography sx={{ color: '#4b5563', fontSize: '0.7rem', letterSpacing: '0.1em', writingMode: 'vertical-rl' }}>
          SCROLL
        </Typography>
        <ArrowDownward sx={{ color: '#4b5563', fontSize: '1rem' }} />
      </motion.div>
    </Box>
  );
};

export default Hero;
