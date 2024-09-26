import {
  Box,
  Typography,
  Button,
  Container,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Code } from '@mui/icons-material';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const codeSnippet = `
  function contact() {
    const email = "chinetaadinnu@gmail.com";
    const phone = "+234 701 867 0919";
    return { email, phone };
  }
  
  // Let's connect!
  const { email, phone } = contact();
    `.trim();

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 8,
        position: 'relative',
      }}
    >
      <Container maxWidth='md'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: '60px' }}
        >
          <Typography
            variant='h2'
            component='h1'
            align='center'
            gutterBottom
            fontWeight='bold'
            sx={{ fontSize: { lg: '3.5rem', xs: '2.5rem' } }}
          >
            Chineta Adinnu
          </Typography>
          <Typography
            variant='h4'
            align='center'
            color='primary.dark'
            gutterBottom
            fontWeight='medium'
          >
            Software Developer
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography
            variant='body1'
            align='center'
            paragraph
            sx={{ mt: 4, mb: 6, fontSize: { lg: '1.2rem', xs: '1rem' } }}
          >
            I started my software development career learning JavaScript,
            progressing into ReactJS and Next.js, creating user-friendly
            solutions tailored to clients&apos; needs. Along the way, I expanded
            my skills by diving into backend development with Express.js, and
            more recently, mobile app development with React Native. I call
            myself the ultimate bug crusher because I enjoy troubleshooting and
            problem-solving. I&apos;ve worked with diverse teams on both large
            and small scales, led engineering teams, and successfully launched
            fullstack products. I also enjoy technical writing, documenting my
            processes for future reference.
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexDirection: { xs: 'column', lg: 'row' },
          }}
        >
          <Button
            variant='contained'
            color='primary'
            size='large'
            onClick={() =>
              window.open('https://netacci.hashnode.dev/', '_blank')
            }
            sx={{
              borderRadius: '28px',
              padding: '10px 30px',
              fontWeight: 'bold',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: theme.shadows[4],
              },
            }}
          >
            Read Articles
          </Button>
          <Button
            variant='contained'
            color='secondary'
            size='large'
            onClick={() =>
              window.open(
                'https://drive.google.com/file/d/1bxTTaKGqwqqaWWHeW2gSrWoHxtvh_by6/view?usp=sharing',
                '_blank'
              )
            }
            sx={{
              borderRadius: '28px',
              padding: '10px 30px',
              fontWeight: 'bold',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: theme.shadows[4],
              },
            }}
          >
            View Resume
          </Button>
        </Box>
      </Container>

      {!isMobile && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            width: '100%',
            height: '100%',
            opacity: 0.1,
            zIndex: 0,
            overflow: 'hidden',
          }}
        >
          <motion.pre
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{
              fontFamily: 'monospace',
              fontSize: '14px',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all',
            }}
          >
            {codeSnippet.repeat(20)}
          </motion.pre>
        </Box>
      )}

      {!isMobile && (
        <motion.div
          style={{
            position: 'absolute',
            bottom: '26%',
            left: '25%',
            color: theme.palette.secondary.light,
            opacity: 0.4,
          }}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Code style={{ fontSize: 60 }} />
        </motion.div>
      )}
      {!isMobile && (
        <motion.div
          style={{
            position: 'absolute',
            top: '40%',
            right: '30%',
            color: theme.palette.secondary.light,
            opacity: 0.4,
          }}
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Code style={{ fontSize: 40 }} />
        </motion.div>
      )}
    </Box>
  );
};

export default Hero;
