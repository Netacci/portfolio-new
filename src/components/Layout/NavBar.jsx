import { Box, Typography, Button } from '@mui/material';
import Logo from '../../assets/logo.svg';
import { useEffect, useState } from 'react';
import { Close, MenuOutlined } from '@mui/icons-material';

const navLinks = [
  { title: 'Work', link: '#work' },
  { title: 'Experience', link: '#experience' },
  { title: 'Skills', link: '#skills' },
  { title: 'About', link: '#about' },
  { title: 'Blog', link: 'https://netacci.hashnode.dev/', external: true },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = !scrolled && !openNav;

  return (
    <Box
      id='nav'
      sx={{
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: { lg: 6, xs: 2.5 },
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1000,
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        backgroundColor: isDark ? 'rgba(12,12,12,0.85)' : '#ffffff',
        backdropFilter: isDark ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.08)' : 'none',
      }}
    >
      {/* Logo */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={Logo}
          alt='Chineta Adinnu'
          style={{
            height: '28px',
            filter: isDark ? 'brightness(0) invert(1)' : 'none',
            transition: 'filter 0.3s ease',
          }}
        />
      </Box>

      {/* Desktop nav */}
      <Box sx={{ gap: 0.5, display: { md: 'flex', xs: 'none' }, alignItems: 'center' }}>
        {navLinks.map((nav) => (
          <Typography
            key={nav.title}
            component='a'
            href={nav.link}
            target={nav.external ? '_blank' : '_self'}
            rel={nav.external ? 'noopener noreferrer' : undefined}
            sx={{
              color: isDark ? '#9ca3af' : '#6b7280',
              fontWeight: 500,
              fontSize: '0.9rem',
              cursor: 'pointer',
              px: 1.5,
              py: 0.75,
              borderRadius: '6px',
              transition: 'color 0.15s ease, background-color 0.15s ease',
              '&:hover': {
                color: isDark ? '#f5f5f5' : '#111827',
                backgroundColor: isDark
                  ? 'rgba(255,255,255,0.06)'
                  : 'rgba(0,0,0,0.04)',
              },
            }}
          >
            {nav.title}
          </Typography>
        ))}
        <Button
          variant='contained'
          size='small'
          href='#contact'
          sx={{
            ml: 1.5,
            bgcolor: '#4f46e5',
            color: '#fff',
            px: 2,
            py: 0.75,
            fontSize: '0.85rem',
            '&:hover': { bgcolor: '#4338ca' },
          }}
        >
          Get in touch
        </Button>
      </Box>

      {/* Mobile menu button */}
      <Box sx={{ display: { md: 'none', xs: 'flex' }, alignItems: 'center' }}>
        {openNav ? (
          <Close
            onClick={() => setOpenNav(false)}
            sx={{ color: '#111827', cursor: 'pointer' }}
          />
        ) : (
          <MenuOutlined
            onClick={() => setOpenNav(true)}
            sx={{ color: isDark ? '#f5f5f5' : '#111827', cursor: 'pointer' }}
          />
        )}
      </Box>

      {/* Mobile menu overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: '64px',
          left: 0,
          width: '100%',
          backgroundColor: '#ffffff',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          transition: 'all 0.25s ease',
          clipPath: openNav
            ? 'inset(0 0 0 0)'
            : 'inset(0 0 100% 0)',
          display: 'flex',
          flexDirection: 'column',
          px: 2.5,
          py: 2,
          gap: 0.5,
          zIndex: 999,
        }}
      >
        {navLinks.map((nav) => (
          <Typography
            key={nav.title}
            component='a'
            href={nav.link}
            target={nav.external ? '_blank' : '_self'}
            rel={nav.external ? 'noopener noreferrer' : undefined}
            onClick={() => setOpenNav(false)}
            sx={{
              color: '#374151',
              fontWeight: 500,
              fontSize: '1rem',
              py: 1.25,
              px: 1.5,
              borderRadius: '8px',
              display: 'block',
              '&:hover': { backgroundColor: '#f9fafb', color: '#111827' },
            }}
          >
            {nav.title}
          </Typography>
        ))}
        <Button
          variant='contained'
          fullWidth
          href='#contact'
          onClick={() => setOpenNav(false)}
          sx={{
            mt: 1,
            bgcolor: '#4f46e5',
            color: '#fff',
            py: 1.25,
            '&:hover': { bgcolor: '#4338ca' },
          }}
        >
          Get in touch
        </Button>
      </Box>
    </Box>
  );
};

export default NavBar;
