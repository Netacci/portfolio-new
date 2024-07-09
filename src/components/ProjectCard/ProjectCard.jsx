/* eslint-disable react/prop-types */
import { Box, Button, Chip, Typography } from '@mui/material';

const ProjectCard = ({ project }) => {
  const handleClick = () => {
    if (project.github) {
      window.open(project.github, '_blank');
    } else return;
  };
  return (
    <Box
      sx={{ cursor: 'pointer', width: '500px', mt: '10px' }}
      onClick={() => window.open(project.live, '_blank')}
    >
      <img style={{ width: '100%' }} src={project.image} alt={project.name} />
      <Typography
        sx={{ color: '#2b2d42', fontSize: '1.5rem', fontWeight: '900' }}
      >
        {project.name}
      </Typography>
      <Typography>{project.description}</Typography>
      <Box sx={{ display: 'flex', gap: 1, my: '10px' }}>
        {project.tags.map((tag) => (
          <Chip label={tag} key={tag} />
        ))}
      </Box>

      <Box sx={{ display: 'flex', gap: 1, my: '10px' }}>
        <Button
          sx={{
            background: '#fff0f2',
            color: '#2b2d42',
            '&:hover': { background: '#fff0f2' },
          }}
          onClick={handleClick}
        >
          {project?.github ? 'View repository' : 'Private Repository'}
        </Button>
        {project.live && (
          <Button
            sx={{
              background: '#fff0f2',
              color: '#2b2d42',
              '&:hover': { background: '#fff0f2' },
            }}
            onClick={() => window.open(project.live, '_blank')}
          >
            View live
          </Button>
        )}

        {project?.article && (
          <Button
            sx={{
              background: '#fff0f2',
              color: '#2b2d42',
              '&:hover': { background: '#fff0f2' },
            }}
            onClick={() => window.open(project.article, '_blank')}
          >
            Read Article
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ProjectCard;
