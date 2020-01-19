import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import globalClasses from '../styles/modules/global.module.scss';
import classes from '../styles/modules/header.module.scss';

export default () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <header className={classes.header}>
      <div>
        <span className={classes.title}>{data.site.siteMetadata.title}</span>
      </div>
      <div
        className={`${globalClasses.iconWrapper} ${globalClasses.btn}`}
        onClick={handleMenuOpen}
        role="button"
      >
        <svg className={classes.menuOpenIcon} width="24" height="24">
          <line className={classes.lineTop} x1="2" y1="8" x2="22" y2="8" />
          <line className={classes.lineBottom} x1="6" y1="14" x2="22" y2="14" />
        </svg>
      </div>
      <div className={`${classes.menuOverlay} ${menuOpen ? classes.open : ''}`}>
        <div
          onClick={handleMenuClose}
          className={`${globalClasses.iconWrapper} ${globalClasses.btn} ${classes.btnCloseMenu}`}
          role="button"
        >
          <svg className={globalClasses.iconLight} width="18" height="18">
            <line x1="1" y1="17" x2="17" y2="1" />
            <line x1="1" y1="1" x2="17" y2="17" />
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
    </header>
  );
};
