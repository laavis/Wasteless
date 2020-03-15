import React from 'react';

import { Link } from 'gatsby';

import globalClasses from '../styles/modules/global.module.scss';
import classes from '../styles/modules/menu.module.scss';

export default ({ open, handleMenuClose }) => {
  return (
    <div className={`${classes.container} ${open ? classes.open : ''}`}>
      <div
        onClick={handleMenuClose}
        className={`${globalClasses.iconWrapper} ${globalClasses.btn} ${classes.btnClose}`}
        role="button"
      >
        <svg className={globalClasses.iconLight} width="32" height="32">
          <line x1="2" y1="31" x2="31" y2="1" />
          <line x1="1" y1="1" x2="31" y2="31" />
        </svg>
      </div>
      <ul className={classes.menu}>
        <li>
          <Link
            className={classes.navItem}
            activeClassName={classes.navItemActive}
            to="/"
          >
            Home
            <svg width="100%" height="2">
              <line x1="0" y1="1" x2="100%" y2="1" />
            </svg>
          </Link>
        </li>
        <li>
          <Link
            className={classes.navItem}
            activeClassName={classes.navItemActive}
            to="/blog"
          >
            Blog
            <svg width="100%" height="2">
              <line x1="0" y1="1" x2="100%" y2="1" />
            </svg>
          </Link>
        </li>
        <li>
          <Link
            className={classes.navItem}
            activeClassName={classes.navItemActive}
            to="/about"
          >
            About
            <svg width="100%" height="2">
              <line x1="0" y1="1" x2="100%" y2="1" />
            </svg>
          </Link>
        </li>
        <li>
          <Link
            className={classes.navItem}
            activeClassName={classes.navItemActive}
            to="/contact"
          >
            Contact{' '}
            <svg width="100%" height="2">
              <line x1="0" y1="1" x2="100%" y2="1" />
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
};
