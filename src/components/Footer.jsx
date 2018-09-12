import PropTypes from 'prop-types';
import React from 'react';
import { Box } from 'rebass';
import Container from './Container';

const Footer = ({ children, ...props }) => (
  <Box as="footer" py={4} bg="lightgray" {...props}>
    <Container>{children}</Container>
  </Box>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
