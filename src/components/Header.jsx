import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Menu from './Menu';

import globalClasses from '../styles/modules/global.module.scss';
import classes from '../styles/modules/header.module.scss';

export default () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  console.log('aaa');

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
        <Link to="/" className={classes.title}>
          {data.site.siteMetadata.title}
        </Link>
      </div>
      <div
        className={`${globalClasses.iconWrapper} ${globalClasses.btn}`}
        onClick={handleMenuOpen}
        role="button"
      >
        <svg className={classes.menuOpenIcon}>
          <line className={classes.lineTop} x1="2" y1="8" x2="30" y2="8" />
          <line className={classes.lineBottom} x1="8" y1="16" x2="30" y2="16" />
        </svg>
      </div>
      <Menu open={menuOpen} handleMenuClose={handleMenuClose} />
    </header>
  );
};
