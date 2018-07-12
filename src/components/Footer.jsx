import PropTypes from 'prop-types';
import React from 'react';
import { Box, Container } from 'rebass';

const Footer = ({ children, ...props }) => (
  <Box is="footer" py={4} bg="gray" {...props}>
    <Container>{children}</Container>
  </Box>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
