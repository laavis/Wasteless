import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

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
            fields {
              slug
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
            <Link to={`/blog/${edge.node.fields.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
            </Link>
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
