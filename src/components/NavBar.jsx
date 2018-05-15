import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Container from './Container';
import styles from './NavBar.module.scss';

const NavBar = ({ title, ...props }) => (
  <div className={styles.root} {...props}>
    <Container>
      <h1 className={styles.title}>
        <Link to="/" className={styles.titleLink}>
          {title}
        </Link>
      </h1>
    </Container>
  </div>
);

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NavBar;
