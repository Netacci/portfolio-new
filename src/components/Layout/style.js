export const styles = {
  navStyle: {
    color: '#2b2d42',
    fontWeight: '600',
    cursor: 'pointer',
    position: 'relative',

    '::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '3px',
      bottom: '0',
      left: '0',
      background: 'transparent',
      transition: 'all 0.5s ease-in-out',
    },
    '&:hover::before': {
      background: '#d90429',
      transform: 'translateY(1px)',
    },
  },
  navWrap: {
    backgroundColor: '#edf2f4',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    px: { lg: 5, xs: 2 },
    position: 'fixed',
    transition: 'all 0.2s ease',
    zIndex: 10,
    top: 0,
    right: 0,
    left: 0,
  },
};
