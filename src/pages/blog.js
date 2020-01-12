import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';

const Blog = () => {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            timeToRead
            excerpt
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>blog</h1>
      {posts.allMarkdownRemark.edges.map((edge, index) => {
        return (
          <div key={index}>
            <h2>{edge.node.frontmatter.title}</h2>
            <div>
              <span>{edge.node.frontmatter.date}</span>
              <span>{edge.node.timeToRead}min read</span>
            </div>
            <p>{edge.node.excerpt}</p>
          </div>
        );
      })}
    </Layout>
  );
};

export default Blog;
