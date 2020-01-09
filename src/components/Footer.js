import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <footer>
      <p>2020 © {data.site.siteMetadata.author}</p>
    </footer>
  );
};
