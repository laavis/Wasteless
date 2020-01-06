import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      <h1>Zero Taste</h1>
      <h3>Zero waste wupwup</h3>
      <p>
        Need help?
        <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  );
};

export default Index;
