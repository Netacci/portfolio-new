import { Box, Button, Typography } from '@mui/material';
import { projects } from '../../data/project';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <Box sx={{ px: { lg: 5, xs: 2 }, mt: '30px' }} id='projects'>
      <Box>
        <Typography sx={{ textAlign: 'center', color: '#D90429' }}>
          Projects
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            color: '#8D99AE',
            fontSize: '2rem',
            fontWeight: '900',
            mb: '20px',
          }}
        >
          Some of the stuff I&apos;ve built
        </Typography>
        <motion.div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 5,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </motion.div>
        <Box sx={{ textAlign: 'center', my: '30px' }}>
          <Button
            onClick={() => window.open('https://github.com/Netacci/', '_blank')}
            sx={{
              background: '#D90429',
              color: '#ffffff',
              borderRadius: '8px',
              fontSize: '0.8rem',
              width: '150px',

              '&:hover': {
                transform: 'scale(0.98)',
                filter: 'opacity(0.7)',
                WebkitFilter: 'opacity(0.7)',
                backgroundColor: '#D90429',
                color: '#ffffff',
              },
            }}
          >
            View All
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
