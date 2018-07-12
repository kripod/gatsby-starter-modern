import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Heading, Provider as RebassProvider } from 'rebass';
import { injectGlobal } from 'styled-components';
import Header from './Header';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`;

const Layout = ({ children }) => (
  <RebassProvider>
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

    <Header brand={<Heading>Gatsby</Heading>} />

    <main>{children}</main>
  </Provider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
