/* eslint-disable react/prop-types */
import { Box, Typography, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, Launch } from '@mui/icons-material';

const ProjectCard = ({ project }) => {
  const hasImage = !!project.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      style={{ height: '100%' }}
    >
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '14px',
          overflow: 'hidden',
          border: '1px solid #e5e7eb',
          backgroundColor: '#ffffff',
          transition: 'box-shadow 0.25s ease',
          '&:hover': {
            boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
          },
        }}
      >
        {/* Card Header — image or gradient */}
        <Box
          sx={{
            position: 'relative',
            height: { xs: '180px', md: '200px' },
            background: hasImage
              ? 'transparent'
              : `linear-gradient(135deg, ${project.cardColor} 0%, #0c0c0c 100%)`,
            overflow: 'hidden',
          }}
        >
          {hasImage ? (
            <Box
              component='img'
              src={project.image}
              alt={project.name}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease',
                '&:hover': { transform: 'scale(1.04)' },
              }}
            />
          ) : null}

          {/* Overlay with project number + company */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: hasImage
                ? 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.65) 100%)'
                : 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              p: 2.5,
            }}
          >
            <Typography
              sx={{
                color: hasImage ? '#ffffff' : project.accentColor,
                fontWeight: 800,
                fontSize: '2.5rem',
                letterSpacing: '-0.04em',
                lineHeight: 1,
                opacity: hasImage ? 0.7 : 0.35,
              }}
            >
              {project.number}
            </Typography>

            <Box
              sx={{
                display: 'inline-flex',
                alignSelf: 'flex-start',
                bgcolor: hasImage
                  ? 'rgba(255,255,255,0.15)'
                  : `${project.accentColor}22`,
                backdropFilter: hasImage ? 'blur(8px)' : 'none',
                border: `1px solid ${hasImage ? 'rgba(255,255,255,0.2)' : project.accentColor + '44'}`,
                borderRadius: '6px',
                px: 1.5,
                py: 0.5,
              }}
            >
              <Typography
                sx={{
                  color: hasImage ? '#ffffff' : project.accentColor,
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                {project.company}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Card Body */}
        <Box sx={{ p: { xs: 2.5, md: 3 }, display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '1.2rem',
              color: '#111827',
              letterSpacing: '-0.015em',
              mb: 2.5,
            }}
          >
            {project.name}
          </Typography>

          {/* Case study sections */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
            <Box>
              <Typography
                sx={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: '#9ca3af',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  mb: 0.6,
                }}
              >
                Problem
              </Typography>
              <Typography sx={{ fontSize: '0.88rem', color: '#374151', lineHeight: 1.6 }}>
                {project.problem}
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: '#9ca3af',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  mb: 0.6,
                }}
              >
                What I did
              </Typography>
              <Typography sx={{ fontSize: '0.88rem', color: '#374151', lineHeight: 1.6 }}>
                {project.solution}
              </Typography>
            </Box>

            <Box
              sx={{
                bgcolor: '#f0fdf4',
                borderLeft: '3px solid #10b981',
                borderRadius: '0 6px 6px 0',
                px: 2,
                py: 1.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: '#059669',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  mb: 0.5,
                }}
              >
                Impact
              </Typography>
              <Typography sx={{ fontSize: '0.88rem', color: '#065f46', lineHeight: 1.6 }}>
                {project.impact}
              </Typography>
            </Box>
          </Box>

          {/* Tags */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 2.5 }}>
            {project.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size='small'
                sx={{
                  bgcolor: '#f3f4f6',
                  color: '#374151',
                  fontWeight: 500,
                  fontSize: '0.72rem',
                  height: '24px',
                  border: '1px solid #e5e7eb',
                }}
              />
            ))}
          </Box>

          {/* Links */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2.5, pt: 2.5, borderTop: '1px solid #f3f4f6' }}>
            {project.github && (
              <Button
                size='small'
                startIcon={<GitHub sx={{ fontSize: '1rem !important' }} />}
                onClick={() => window.open(project.github, '_blank')}
                sx={{
                  color: '#6b7280',
                  fontSize: '0.8rem',
                  px: 1.5,
                  '&:hover': { color: '#111827', bgcolor: '#f9fafb' },
                }}
              >
                Code
              </Button>
            )}
            {project.live && (
              <Button
                size='small'
                startIcon={<Launch sx={{ fontSize: '1rem !important' }} />}
                onClick={() => window.open(project.live, '_blank')}
                sx={{
                  color: '#6b7280',
                  fontSize: '0.8rem',
                  px: 1.5,
                  '&:hover': { color: '#111827', bgcolor: '#f9fafb' },
                }}
              >
                Live
              </Button>
            )}
            {!project.live && !project.github && (
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.75,
                  bgcolor: '#fefce8',
                  border: '1px solid #fde68a',
                  borderRadius: '20px',
                  px: 1.25,
                  py: 0.3,
                }}
              >
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#f59e0b' }} />
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: '#92400e', letterSpacing: '0.05em' }}>
                  IN PROGRESS
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default ProjectCard;
