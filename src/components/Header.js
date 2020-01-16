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

  const handleMenuOpen = () => {};

  return (
    <header className={classes.header}>
      <div>
        <span className={classes.title}>{data.site.siteMetadata.title}</span>
      </div>
      <div className={classes.menuButton}>
        <svg className={classes.menuIcon} width="24" height="24">
          <line x1="2" y1="8" x2="22" y2="8" />
          <line x1="6" y1="14" x2="22" y2="14" />
        </svg>
      </div>
      <div className={classes.menuOverlay}>
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
      </div>
    </header>
  );
};
