import { Box, Button, Typography } from '@mui/material';
// import HeroImage from '../../assets/hero.png';
// import Elipse from '../../assets/Ellipse-s.png';
// import BigEllipse from '../../assets/Ellipse.png';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      sx={{
        background: '#edf2f4',
        py: '80px',
        textAlign: 'center',
        px: { lg: 5, xs: 2 },
      }}
      id='home'
    >
      <Box>
        <Typography sx={{ fontSize: '1.3rem' }}>
          Hello! I&apos;m Chineta Adinnu
        </Typography>
        <Typography
          sx={{
            fontSize: '2.2rem',
            color: '#2b2d42',
            fontWeight: '900',
            mb: '0',
          }}
        >
          Software Developer
        </Typography>
        {/* <Typography
            sx={{
              fontSize: '0.75rem',
              color: '#2b2d42',
              fontWeight: '900',
              mt: '0',
            }}
          >
            (Backend development in the works, technical writer by night)
          </Typography> */}
        <motion.p
          style={{
            color: '#2b2d42',
            lineHeight: '32px',
            marginTop: '15px',
            textAlign: 'justify',
            fontSize: '1.1rem',
            marginBottom: '20px',
          }}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          I started my software development career learning JavaScript and then
          advanced to ReactJS and NextJs, creating user-friendly solutions
          tailored to clients&apos; needs. I call myself the ultimate bug
          crusher because I enjoy troubleshooting and problem-solving. I have
          worked with diverse teams both on a large and small scale, led
          engineering teams and successfully launched fullstack products. I also
          enjoy technical writing as I like to document my processes for future
          reference.
        </motion.p>
        <Typography
          sx={{ color: '#2b2d42', lineHeight: '24px', mt: '20px' }}
        ></Typography>
        <Box
          sx={{
            mt: '20px',
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          <Button
            onClick={() =>
              window.open('https://netacci.hashnode.dev/', '_blank')
            }
            sx={{
              background: '#D90429',
              color: '#ffffff',
              borderRadius: '8px',
              fontSize: '0.8rem',
              '&:hover': {
                transform: 'scale(0.98)',
                filter: 'opacity(0.7)',
                WebkitFilter: 'opacity(0.7)',
                backgroundColor: '#D90429',
                color: '#ffffff',
              },
            }}
          >
            Read Articles
          </Button>
          <Button
            onClick={() =>
              window.open(
                'https://drive.google.com/file/d/10KN7khb54xcHAx0_DUQJmnwfKSDkWI5p/view?usp=sharing',
                '_blank'
              )
            }
            sx={{
              background: '#FFF0F2',
              color: '#2B2D42',
              borderRadius: '8px',
              fontSize: '0.8rem',
              '&:hover': {
                transform: 'scale(0.98)',

                background: '#FFF0F2',
                color: '#2B2D42',
              },
            }}
          >
            View Resume
          </Button>
        </Box>
      </Box>
      {/* <Box
          sx={{
            width: { xs: '100%', md: '40%' },
            alignContent: 'center',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: 'auto',
              left: '23%',
              top: '4%',
            }}
          >
            <motion.img
              src={Elipse}
              style={{ maxWidth: '100%', width: '47%' }}
              alt='profile'
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              width: 'auto',
              left: '50%',
              bottom: '0%',
            }}
          >
            <motion.img
              src={BigEllipse}
              style={{ maxWidth: '100%', width: '47%' }}
              alt='profile'
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
          </Box>
          <Box>
            <img src={HeroImage} style={{ maxWidth: '50%' }} alt='profile' />
          </Box>
        </Box> */}
    </Box>
  );
};

export default Hero;
