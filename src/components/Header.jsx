import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Container from './Container';
import styles from './Header.module.scss';

const Header = ({ brand, className, ...props }) => (
  <header className={`${styles.root} ${className}`} {...props}>
    <Container>
      <Link to="/">{brand}</Link>
    </Container>
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
