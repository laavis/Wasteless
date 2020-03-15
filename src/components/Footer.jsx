import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import classes from '../styles/modules/footer.module.scss';

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
      <p className={classes.cp}>2020 © {data.site.siteMetadata.author}</p>
    </footer>
  );
};
