import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowOutward } from '@mui/icons-material';

const About = () => {
  return (
    <Box
      component='section'
      id='about'
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e5e7eb',
      }}
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
            About
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 6, md: 10 },
            alignItems: 'start',
          }}
        >
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant='h2'
              sx={{
                color: '#111827',
                fontSize: { xs: '2rem', md: '2.6rem' },
                mb: 4,
                lineHeight: 1.15,
              }}
            >
              I started in IT support.
              <Box component='span' sx={{ color: '#9ca3af' }}>
                {' '}
                Now I build the systems.
              </Box>
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <Typography sx={{ color: '#374151', fontSize: '1rem', lineHeight: 1.75 }}>
                Fixing machines taught me how systems break — and how to prevent it. That
                curiosity pushed me toward the code underneath. I taught myself JavaScript,
                then React, then the full stack.
              </Typography>
              <Typography sx={{ color: '#374151', fontSize: '1rem', lineHeight: 1.75 }}>
                Today, I maintain real healthcare infrastructure: 50+ microservices,
                6 frontend portals, real users depending on what I ship. I&apos;ve led
                engineering teams, contributed to open-source at Mozilla, worked with
                LLMs at Turing, and owned products from zero to launch.
              </Typography>
              <Typography sx={{ color: '#374151', fontSize: '1rem', lineHeight: 1.75 }}>
                I care about performance, readable code, and systems that handle real
                load without drama. When I&apos;m not building, I&apos;m writing about it.
              </Typography>
            </Box>

            <Button
              endIcon={<ArrowOutward sx={{ fontSize: '1rem !important' }} />}
              onClick={() => window.open('https://netacci.hashnode.dev/', '_blank')}
              sx={{
                mt: 4,
                color: '#4f46e5',
                fontWeight: 600,
                fontSize: '0.9rem',
                pl: 0,
                '&:hover': { bgcolor: 'transparent', color: '#3730a3' },
              }}
            >
              Read my writing
            </Button>
          </motion.div>

          {/* Right: Quick facts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                {
                  label: 'Currently',
                  value:
                    'Fullstack engineer at cimpleDev, building HXConnect — a platform making healthcare accessible across Nigeria. 50+ microservices, 6 frontend portals.',
                },
                {
                  label: 'Stack of choice',
                  value: 'TypeScript, React, Next.js, NestJS, PostgreSQL',
                },
                {
                  label: 'Career path',
                  value: 'IT Support → Frontend Dev → Fullstack Engineer → Tech Lead',
                },
                {
                  label: 'Open source',
                  value: 'Contributed to Mozilla PerfCompare — used by the Firefox performance team',
                },
                {
                  label: 'Outside of code',
                  value: 'Technical writing — I document what I learn at netacci.hashnode.dev',
                },
              ].map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                >
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: '10px',
                      border: '1px solid #e5e7eb',
                      backgroundColor: '#fafaf9',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: '#9ca3af',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        mb: 0.75,
                      }}
                    >
                      {fact.label}
                    </Typography>
                    <Typography
                      sx={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.6 }}
                    >
                      {fact.value}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
