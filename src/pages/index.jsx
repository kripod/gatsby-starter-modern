import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { Container, Heading, Link, Text } from 'rebass';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <Container>
      <Heading my={3}>Hi people</Heading>
      <Text is="p">Welcome to your new Gatsby site.</Text>
      <Text is="p">Now go build something great.</Text>
      <Text is="p" my={3}>
        <Link is={GatsbyLink} to="/page-2/">
          Go to page 2
        </Link>
      </Text>
    </Container>
  </Layout>
);

export default IndexPage;
