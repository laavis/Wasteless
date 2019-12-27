import React from 'react';

import { Link } from 'gatsby';

import classes from '../styles/modules/header.module.scss';

export default () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>Gatsby</h1>
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
  );
};
