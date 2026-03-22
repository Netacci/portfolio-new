import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: 'Frontend',
    color: '#4f46e5',
    skills: [
      { name: 'React', level: 'Expert' },
      { name: 'Next.js', level: 'Expert' },
      { name: 'TypeScript', level: 'Expert' },
      { name: 'Vue.js', level: 'Proficient' },
      { name: 'TailwindCSS', level: 'Expert' },
      { name: 'MUI', level: 'Expert' },
      { name: 'Framer Motion', level: 'Proficient' },
      { name: 'HTML / CSS', level: 'Expert' },
    ],
  },
  {
    category: 'Backend',
    color: '#0891b2',
    skills: [
      { name: 'NestJS', level: 'Proficient' },
      { name: 'Express.js', level: 'Expert' },
      { name: 'Node.js', level: 'Expert' },
      { name: 'Django', level: 'Proficient' },
      { name: 'PostgreSQL', level: 'Proficient' },
      { name: 'MongoDB', level: 'Expert' },
      { name: 'REST APIs', level: 'Expert' },
      { name: 'WebSockets', level: 'Proficient' },
    ],
  },
  {
    category: 'Tools & Practices',
    color: '#059669',
    skills: [
      { name: 'Git', level: 'Expert' },
      { name: 'Redux / Redux Toolkit', level: 'Expert' },
      { name: 'React Query', level: 'Proficient' },
      { name: 'Docker', level: 'Familiar' },
      { name: 'Contentful CMS', level: 'Proficient' },
      { name: 'CI / CD', level: 'Familiar' },
      { name: 'Microservices', level: 'Proficient' },
      { name: 'Performance Monitoring', level: 'Proficient' },
    ],
  },
];

const levelColor = {
  Expert: '#4f46e5',
  Proficient: '#0891b2',
  Familiar: '#9ca3af',
};

const Skills = () => {
  return (
    <Box
      component='section'
      id='skills'
      sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#fafaf9' }}
    >
      <Container maxWidth='lg'>
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
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
            Skills
          </Typography>
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
            <Typography
              variant='h2'
              sx={{
                color: '#111827',
                fontSize: { xs: '2rem', md: '2.8rem' },
                maxWidth: '480px',
              }}
            >
              Depth across the stack.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
              {Object.entries(levelColor).map(([label, color]) => (
                <Box key={label} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: color }}
                  />
                  <Typography sx={{ fontSize: '0.78rem', color: '#6b7280', fontWeight: 500 }}>
                    {label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {skillGroups.map((group, groupIndex) => (
            <Grid item xs={12} md={4} key={group.category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              >
                <Box
                  sx={{
                    p: 3.5,
                    borderRadius: '14px',
                    border: '1px solid #e5e7eb',
                    backgroundColor: '#ffffff',
                    height: '100%',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                    <Box
                      sx={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        bgcolor: group.color,
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: '#111827',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {group.category}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {group.skills.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: groupIndex * 0.1 + i * 0.04 }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            py: 1,
                            borderBottom: '1px solid #f3f4f6',
                            '&:last-child': { borderBottom: 'none' },
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: '0.9rem',
                              color: '#374151',
                              fontWeight: 500,
                            }}
                          >
                            {skill.name}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '0.7rem',
                              fontWeight: 600,
                              color: levelColor[skill.level],
                              letterSpacing: '0.04em',
                            }}
                          >
                            {skill.level}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
