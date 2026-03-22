import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const previousCompanies = [
  { name: 'Mozilla', detail: 'Developer Tooling' },
  { name: 'Turing', detail: 'LLM Training' },
  { name: 'Parivest', detail: 'Technical Lead' },
];

const Credibility = () => {
  return (
    <Box
      sx={{
        borderBottom: '1px solid #e5e7eb',
        py: { xs: 5, md: 6 },
        backgroundColor: '#ffffff',
      }}
    >
      <Container maxWidth='lg'>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              alignItems: { xs: 'flex-start', lg: 'center' },
              gap: { xs: 5, lg: 0 },
            }}
          >
            {/* Current role */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                pr: { lg: 5 },
                mr: { lg: 5 },
                borderRight: { lg: '1px solid #e5e7eb' },
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#10b981',
                  flexShrink: 0,
                  boxShadow: '0 0 0 3px rgba(16,185,129,0.2)',
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    color: '#10b981',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    mb: 0.3,
                  }}
                >
                  Currently
                </Typography>
                <Typography
                  sx={{ fontWeight: 700, fontSize: '1rem', color: '#111827', letterSpacing: '-0.01em' }}
                >
                  cimpleDev
                  <Box
                    component='a'
                    href='https://hxc.ng/'
                    target='_blank'
                    rel='noopener noreferrer'
                    sx={{
                      color: '#6b7280',
                      fontWeight: 400,
                      fontSize: '0.88rem',
                      textDecoration: 'none',
                      '&:hover': { color: '#4f46e5', textDecoration: 'underline', textUnderlineOffset: '2px' },
                    }}
                  >
                    {' '}/ HXConnect
                  </Box>
                </Typography>
                <Typography sx={{ fontSize: '0.78rem', color: '#9ca3af', fontWeight: 500 }}>
                  Fullstack Engineer &middot; Healthcare
                </Typography>
              </Box>
            </Box>

            {/* Previous companies */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                flex: 1,
                gap: { xs: 3, sm: 0 },
                alignItems: { sm: 'center' },
              }}
            >
              <Typography
                sx={{
                  color: '#9ca3af',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  mr: { sm: 4 },
                  flexShrink: 0,
                }}
              >
                Previously
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: { xs: 3, sm: 0 },
                  flex: 1,
                }}
              >
                {previousCompanies.map((company, i) => (
                  <motion.div
                    key={company.name}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    style={{ flex: 1 }}
                  >
                    <Box
                      sx={{
                        pl: { xs: 0, sm: i === 0 ? 0 : 4 },
                        borderLeft: {
                          xs: 'none',
                          sm: i === 0 ? 'none' : '1px solid #e5e7eb',
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: '1rem',
                          color: '#111827',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {company.name}
                      </Typography>
                      <Typography
                        sx={{ fontSize: '0.78rem', color: '#9ca3af', fontWeight: 500, mt: 0.2 }}
                      >
                        {company.detail}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Credibility;
