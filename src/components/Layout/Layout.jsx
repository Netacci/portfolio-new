/* eslint-disable react/prop-types */
import NavBar from './NavBar';
import Footer from './Footer';
import { Box } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
