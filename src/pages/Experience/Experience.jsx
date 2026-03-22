import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'cimpleDev',
    client: 'HXConnect',
    clientUrl: 'https://hxc.ng/',
    role: 'Fullstack Engineer',
    period: 'Current',
    color: '#10b981',
    current: true,
    highlights: [
      'Building and maintaining HXConnect — a platform making healthcare accessible across Nigeria',
      'Working across a distributed system of 50+ NestJS microservices handling real patient and provider data',
      'Supporting and developing 6 Vue.js frontend portals serving different healthcare user roles',
      'Collaborating on architecture decisions, feature delivery, and system reliability at scale',
    ],
  },
  {
    company: 'Turing',
    role: 'LLM Trainer',
    period: '2025',
    color: '#6366f1',
    highlights: [
      'Trained and evaluated large language model outputs for accuracy and alignment',
      'Worked on prompt quality, reasoning consistency, and failure case identification',
      'Developed a strong practical understanding of how LLMs reason and where they fail',
      'Informed AI-aware development practices carried into product work',
    ],
  },
  {
    company: 'Mozilla',
    role: 'Frontend Engineer',
    period: '2024',
    color: '#ff6611',
    highlights: [
      'Built search and filtering for PerfCompare — Mozilla\'s browser performance regression tool',
      'Improved accessibility across the UI, making the tool usable for all engineers',
      'Contributed across the stack: React frontend and Django + PostgreSQL backend',
      'Worked in an open-source environment with async, distributed teams',
    ],
  },
  
  {
    company: 'Parivest',
    role: 'Technical Lead',
    period: '2022 – 2025',
    color: '#f59e0b',
    highlights: [
      'Led engineering strategy to take the product from MVP to market-fit — owning roadmap, architecture, and delivery',
      'Launched savings and referral features driving a 35% increase in user engagement and 40% increase in retention',
      'Built an admin dashboard that cut manual operational tasks by 50%',
      'Rebuilt the landing page in Next.js, contributing to a 15% lift in conversion rates',
    ],
  },
  {
    company: 'Fullgap',
    role: 'Frontend Developer',
    period: '2022',
    color: '#0891b2',
    highlights: [
      'Built user-focused web applications with ReactJS and Material UI, resulting in a 15% increase in user engagement',
      'Implemented an autosave feature that reduced data loss incidents by 30% and improved overall data security',
      'Conducted end-to-end testing with Cypress, achieving a 98% issue resolution rate before production',
      'Used Sentry for real-time observability and applied responsive design best practices, improving mobile engagement by 20%',
    ],
  },
];

const Experience = () => {
  return (
    <Box
      component='section'
      id='experience'
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e5e7eb',
        borderBottom: '1px solid #e5e7eb',
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
            Experience
          </Typography>
          <Typography
            variant='h2'
            sx={{
              color: '#111827',
              fontSize: { xs: '2rem', md: '2.8rem' },
              mb: { xs: 6, md: 8 },
              maxWidth: '480px',
            }}
          >
            Where I&apos;ve done my best work.

          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} md={exp.current ? 12 : 6} key={exp.company}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Box
                  sx={{
                    p: 3.5,
                    height: '100%',
                    borderRadius: '14px',
                    border: '1px solid #e5e7eb',
                    backgroundColor: '#fafaf9',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                    '&:hover': {
                      boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  {/* Company color bar */}
                  <Box
                    sx={{
                      width: '36px',
                      height: '4px',
                      bgcolor: exp.color,
                      borderRadius: '2px',
                      mb: 2.5,
                    }}
                  />

                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: exp.current ? { xs: '1.5rem', md: '1.8rem' } : '1.4rem',
                          color: '#111827',
                          letterSpacing: '-0.02em',
                          lineHeight: 1.1,
                        }}
                      >
                        {exp.company}
                      </Typography>
                      {exp.client && (
                        <Typography
                          component={exp.clientUrl ? 'a' : 'span'}
                          href={exp.clientUrl || undefined}
                          target={exp.clientUrl ? '_blank' : undefined}
                          rel={exp.clientUrl ? 'noopener noreferrer' : undefined}
                          sx={{
                            fontWeight: 600,
                            fontSize: exp.current ? '1rem' : '0.9rem',
                            color: exp.clientUrl ? exp.color : '#6b7280',
                            letterSpacing: '-0.01em',
                            textDecoration: 'none',
                            '&:hover': exp.clientUrl
                              ? { textDecoration: 'underline', textUnderlineOffset: '3px' }
                              : {},
                          }}
                        >
                          / {exp.client}
                        </Typography>
                      )}
                      {exp.current && (
                        <Box
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 0.75,
                            bgcolor: '#f0fdf4',
                            border: '1px solid #bbf7d0',
                            borderRadius: '20px',
                            px: 1.25,
                            py: 0.3,
                          }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              bgcolor: '#10b981',
                            }}
                          />
                          <Typography
                            sx={{
                              fontSize: '0.7rem',
                              fontWeight: 700,
                              color: '#059669',
                              letterSpacing: '0.05em',
                            }}
                          >
                            CURRENT
                          </Typography>
                        </Box>
                      )}
                    </Box>
                    <Typography
                      sx={{
                        color: '#6b7280',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        mt: 0.5,
                      }}
                    >
                      {exp.role} &middot; {exp.period}
                    </Typography>
                  </Box>

                  <Box
                    component='ul'
                    sx={{
                      pl: 0,
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1.5,
                      flex: 1,
                    }}
                  >
                    {exp.highlights.map((point, i) => (
                      <Box
                        component='li'
                        key={i}
                        sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}
                      >
                        <Box
                          sx={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            bgcolor: exp.color,
                            mt: '7px',
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: '0.88rem',
                            color: '#374151',
                            lineHeight: 1.6,
                          }}
                        >
                          {point}
                        </Typography>
                      </Box>
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

export default Experience;
