import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h3>I like big dicks</h3>
      <p>
        Need help?
        <Link to="/contact">Contact me uwu</Link>
      </p>
    </Layout>
  );
};

export default Index;
