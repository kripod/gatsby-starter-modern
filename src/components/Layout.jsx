import 'modern-normalize/modern-normalize.css';
import { StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import Header from './Header';
import styles from './Layout.module.scss';

const Layout = ({ children }) => (
  <React.Fragment>
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              language
            }
          }
        }
      `}
      render={staticData => (
        <Helmet
          titleTemplate={`%s | ${staticData.site.siteMetadata.title}`}
          defaultTitle={staticData.site.siteMetadata.title}
        >
          <html lang={staticData.site.siteMetadata.language} />
        </Helmet>
      )}
    />

    <Header brand={<h1 className={styles.headerBrandTitle}>Gatsby</h1>} />

    <main className={styles.main}>{children}</main>
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
