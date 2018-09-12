import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Box, Flex, Heading, Text } from 'rebass';
import { createGlobalStyle } from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    text-size-adjust: 100%;
  }
`;

const Layout = ({ children }) => (
  <Flex
    flexDirection="column"
    css={{
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
    }}
  >
    <GlobalStyle />

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

    <Box as="main" css={{ flex: 1 }}>
      {children}
    </Box>

    <Footer>
      <Text textAlign="center">Sticky footer</Text>
    </Footer>
  </Flex>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
