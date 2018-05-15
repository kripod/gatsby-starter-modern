import { Link } from 'gatsby';
import React from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <Container>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Container>
  </Layout>
);

export default IndexPage;
