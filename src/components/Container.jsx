import PropTypes from 'prop-types';
import React from 'react';
import styles from './Container.module.scss';

const Container = ({ children, className, ...props }) => (
  <div className={`${styles.root} ${className}`} {...props}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Container.defaultProps = {
  className: '',
};

export default Container;
