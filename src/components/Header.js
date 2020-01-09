import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import classes from '../styles/modules/header.module.scss';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className={classes.header}>
      <div>
        <span className={classes.title}>{data.site.siteMetadata.title}</span>
      </div>
      <ul className={classes.menu}>
        <li>
          <Link
            className={classes.navItem}
            activeClassName={classes.navItemActive}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={classes.navItem}
            activeClassName={classes.navItemActive}
            to="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={classes.navItem}
            activeClassName={classes.navItemActive}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={classes.navItem}
            activeClassName={classes.navItemActive}
            to="/contact"
          >
            Contact{' '}
          </Link>
        </li>
      </ul>
    </header>
  );
};
