/* eslint-disable react/prop-types */
import { Box, Button, Chip, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const handleClick = () => {
    if (project.github) {
      window.open(project.github, '_blank');
    } else return;
  };
  return (
    <Box
      sx={{ cursor: 'pointer', width: { md: '500px', xs: '100%' }, mt: '10px' }}
      onClick={() => window.open(project.live, '_blank')}
    >
      <motion.img
        style={{ width: '100%' }}
        src={project.image}
        alt={project.name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
      />
      <Typography
        sx={{ color: '#2b2d42', fontSize: '1.5rem', fontWeight: '900' }}
      >
        {project.name}
      </Typography>
      <Typography>{project.description}</Typography>
      <Box sx={{ display: 'flex', gap: 1, my: '10px', flexWrap: 'wrap' }}>
        {project.tags.map((tag) => (
          <Chip label={tag} key={tag} />
        ))}
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: 1,
          my: '10px',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
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
