import { Box, Typography, Button, Grid, Container } from '@mui/material';
import { projects } from '../../data/project';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { useCardStacking } from '../../hooks/useCardStacking';

const Projects = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' });

  const { containerRef, cardsRef } = useCardStacking(isTabletOrMobile, {
    spaceBetween: 30,
    scaleAmount: 0.05,
  });

  return (
    <Box
      component='section'
      sx={{ py: 8, backgroundColor: '#ADD8E6' }}
      id='projects'
    >
      <Container maxWidth='lg'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant='h6'
            align='center'
            color='primary'
            gutterBottom
            fontWeight='medium'
          >
            MY WORK
          </Typography>
          <Typography
            variant='h3'
            align='center'
            color='text.primary'
            gutterBottom
            fontWeight='bold'
            sx={{ mb: 6 }}
          >
            Recent Projects
          </Typography>
        </motion.div>
        {!isTabletOrMobile ? (
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={project.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        ) : (
          <div ref={containerRef} className='cards-container relative mt-10'>
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className='card'
              >
                <div className='card-inner'>
                  <ProjectCard project={project} />
                </div>
              </div>
            ))}
          </div>
        )}

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Button
            variant='contained'
            color='primary'
            size='large'
            onClick={() => window.open('https://github.com/Netacci/', '_blank')}
            sx={{
              borderRadius: '28px',
              padding: '12px 36px',
              fontWeight: 'bold',
              textTransform: 'none',
              fontSize: '1.1rem',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: (theme) => theme.shadows[4],
              },
            }}
          >
            View All Projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
