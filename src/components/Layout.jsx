import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Box, Flex, Heading, Provider as RebassProvider, Text } from 'rebass';
import { injectGlobal } from 'styled-components';
import Footer from './Footer';
import Header from './Header';

injectGlobal`
  body {
    margin: 0;
    text-size-adjust: 100%;
  }
`;

const Layout = ({ children }) => (
  <RebassProvider is={Flex} flexDirection="column" css={{ minHeight: '100vh' }}>
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              language
            }
          }
        }
      `}
      render={data => (
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        >
          <html lang={data.site.siteMetadata.language} />
        </Helmet>
      )}
    />

    <Header brand={<Heading>Gatsby</Heading>} />

    <Box is="main" flex={1}>
      {children}
    </Box>

    <Footer>
      <Text align="center">Sticky footer</Text>
    </Footer>
  </RebassProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
