import { Box, Typography } from '@mui/material';
import Logo from '../../assets/logo.svg';
import { styles } from './style';
import { useEffect, useState } from 'react';
import { Close, MenuOutlined } from '@mui/icons-material';

const NavBar = () => {
  const navList = [
    { title: 'Home', link: '#home' },
    // { title: 'Skills', link: '#skills' },
    { title: 'Projects', link: '#projects' },
    { title: 'Contact', link: '#contact' },
    { title: 'Blog', link: 'https://netacci.hashnode.dev/' },
  ];
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('nav');
      if (window.pageYOffset > 50) {
        nav.style.backgroundColor = '#ffffff';
      } else {
        nav.style.backgroundColor = '#edf2f4';
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box sx={styles.navWrap} id='nav'>
      <img src={Logo} alt='logo' />

      <Box sx={{ gap: 3, display: { md: 'flex', xs: 'none' } }}>
        {navList.map((nav) => (
          <Typography
            component={'a'}
            href={nav.link}
            sx={styles.navStyle}
            key={nav.title}
            target={nav.title === 'Blog' ? '_blank' : '_self'}
          >
            {nav.title}
          </Typography>
        ))}
      </Box>
      {openNav ? (
        <Close onClick={() => setOpenNav(false)} sx={{ color: '#2b2d42' }} />
      ) : (
        <MenuOutlined
          sx={{
            color: '#2b2d42',
            cursor: 'pointer',
            display: { md: 'none', xs: 'block' },
          }}
          onClick={() => setOpenNav(true)}
        />
      )}

      <Box
        sx={{
          position: 'absolute',
          transition: 'all 0.7s ease-out',
          clipPath: openNav
            ? 'circle(811px at 105% -10%)'
            : 'circle(100px at 109% -23%)',
          WebkitClipPath: openNav
            ? 'circle(811px at 105% -10%)'
            : 'circle(100px at 109% -23%)',
          top: '97%',
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: '#ffffff',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {navList.map((nav) => (
            <Typography
              component={'a'}
              href={nav.link}
              sx={styles.navStyle}
              style={{ marginTop: '20px' }}
              key={nav.title}
            >
              {nav.title}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
