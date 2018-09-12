import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Box, Link } from 'rebass';
import Container from './Container';

const Header = ({ brand, ...props }) => (
  <Box as="header" color="white" bg="rebeccapurple" {...props}>
    <Container>
      <Link as={GatsbyLink} to="/" px={0} my={3}>
        {brand}
      </Link>
    </Container>
  </Box>
);

Header.propTypes = {
  brand: PropTypes.node.isRequired,
};

export default Header;
