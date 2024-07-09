import { Box, Typography } from '@mui/material';
import { projects } from '../../data/project';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <Box sx={{ px: 5, mt: '30px' }} id='projects'>
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
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 5,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
