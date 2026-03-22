import { Box, Typography, Button, Grid, Container } from '@mui/material';
import { featuredProjects } from '../../data/project';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { motion } from 'framer-motion';
import { ArrowOutward } from '@mui/icons-material';

const Projects = () => {
  return (
    <Box
      component='section'
      id='work'
      sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#fafaf9' }}
    >
      <Container maxWidth='lg'>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', md: 'flex-end' },
              mb: { xs: 6, md: 8 },
              gap: 2,
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: '#4f46e5',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  mb: 1,
                }}
              >
                Selected Work
              </Typography>
              <Typography
                variant='h2'
                sx={{
                  color: '#111827',
                  fontSize: { xs: '2rem', md: '2.8rem' },
                  maxWidth: '480px',
                }}
              >
                Projects that solved real problems.
              </Typography>
            </Box>

            <Button
              endIcon={<ArrowOutward sx={{ fontSize: '1rem !important' }} />}
              onClick={() => window.open('https://github.com/Netacci/', '_blank')}
              sx={{
                color: '#6b7280',
                fontSize: '0.9rem',
                fontWeight: 500,
                whiteSpace: 'nowrap',
                '&:hover': { color: '#111827' },
              }}
            >
              All projects on GitHub
            </Button>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {featuredProjects.map((project, index) => (
            <Grid item xs={12} sm={6} key={project.name}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                style={{ height: '100%' }}
              >
                <ProjectCard project={project} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
