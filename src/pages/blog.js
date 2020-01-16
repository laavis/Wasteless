import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';

const Blog = () => {
  const posts = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>blog</h1>
      {posts.allContentfulBlogPost.edges.map((edge, index) => {
        return (
          <div key={index}>
            <Link to={`/blog/${edge.node.slug}`}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.publishedDate}</p>
            </Link>
            <div>
              <span>{edge.node.timeToRead}min read</span>
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default Blog;
