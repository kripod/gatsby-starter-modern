import 'modern-normalize/modern-normalize.css';
import { StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import NavBar from './NavBar';

const Layout = ({ children }) => (
  <React.Fragment>
    <header>
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

      <NavBar title="Gatsby" />
    </header>

    <main>{children}</main>
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
