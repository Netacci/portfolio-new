/* eslint-disable react/prop-types */

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Button,
  Box,
  CardActionArea,
} from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, Launch, Article } from '@mui/icons-material';

const ProjectCard = ({ project }) => {
  const handleClick = (url, event) => {
    event.stopPropagation();
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: 2,
        boxShadow: 3,
        '&:hover': {
          boxShadow: 6,
        },
      }}
    >
      <CardActionArea
        onClick={(e) => handleClick(project.live, e)}
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
        }}
      >
        <CardMedia
          component='img'
          height='200'
          image={project.image}
          alt={project.name}
          sx={{
            objectFit: 'cover',
            transition: '0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
        <CardContent
          sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
        >
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            fontWeight='bold'
          >
            {project.name}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ mb: 2, flexGrow: 1 }}
          >
            {project.description}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
            {project.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size='small'
                sx={{
                  backgroundColor: 'primary.light',
                  color: 'primary.contrastText',
                  fontWeight: 'medium',
                }}
              />
            ))}
          </Box>
        </CardContent>
      </CardActionArea>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          p: 1,
          backgroundColor: 'background.paper',
        }}
      >
        {project.github && (
          <Button
            startIcon={<GitHub />}
            onClick={(e) => handleClick(project.github, e)}
            sx={{ minWidth: 'auto' }}
          >
            Code
          </Button>
        )}
        {project.live && (
          <Button
            startIcon={<Launch />}
            onClick={(e) => handleClick(project.live, e)}
            sx={{ minWidth: 'auto' }}
          >
            Demo
          </Button>
        )}
        {project.article && (
          <Button
            startIcon={<Article />}
            onClick={(e) => handleClick(project.article, e)}
            sx={{ minWidth: 'auto' }}
          >
            Article
          </Button>
        )}
      </Box>
    </Card>
  );
};

export default ProjectCard;
