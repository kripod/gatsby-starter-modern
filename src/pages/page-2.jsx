import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { Heading, Link, Text } from 'rebass';
import Container from '../components/Container';
import Layout from '../components/Layout';

const SecondPage = () => (
  <Layout>
    <Container>
      <Heading my={3}>Hi from the second page</Heading>
      <Text as="p">Welcome to page 2</Text>
      <Text as="p" my={3}>
        <Link as={GatsbyLink} to="/">
          Go back to the homepage
        </Link>
      </Text>
    </Container>
  </Layout>
);

export default SecondPage;
