import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { Heading, Link, Text } from 'rebass';
import Container from '../components/Container';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <Container>
      <Heading my={3}>Hi people</Heading>
      <Text as="p">Welcome to your new Gatsby site.</Text>
      <Text as="p">Now go build something great.</Text>
      <Text as="p" my={3}>
        <Link as={GatsbyLink} to="/page-2/">
          Go to page 2
        </Link>
      </Text>
    </Container>
  </Layout>
);

export default IndexPage;
