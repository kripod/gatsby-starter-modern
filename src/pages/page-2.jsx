import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { Container, Heading, Link, Text } from 'rebass';
import Layout from '../components/Layout';

const SecondPage = () => (
  <Layout>
    <Container>
      <Heading my={3}>Hi from the second page</Heading>
      <Text is="p">Welcome to page 2</Text>
      <Text is="p" my={3}>
        <Link is={GatsbyLink} to="/">
          Go back to the homepage
        </Link>
      </Text>
    </Container>
  </Layout>
);

export default SecondPage;
