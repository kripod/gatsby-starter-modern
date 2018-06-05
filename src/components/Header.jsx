import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Container from './Container';
import styles from './Header.module.scss';

const Header = ({ title, ...props }) => (
  <header className={styles.root} {...props}>
    <Container>
      <h1 className={styles.title}>
        <Link to="/" className={styles.titleLink}>
          {title}
        </Link>
      </h1>
    </Container>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
