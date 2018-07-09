import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Box, Container, NavLink } from 'rebass';

const Header = ({ brand, ...props }) => (
  <header {...props}>
    <Box color="white" bg="rebeccapurple">
      <Container>
        <NavLink is={GatsbyLink} to="/" px={0} my={3}>
          {brand}
        </NavLink>
      </Container>
    </Box>
  </header>
);

Header.propTypes = {
  brand: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default Header;
