import React from 'react';

import { Link } from 'gatsby';

import classes from '../styles/modules/header.module.scss';

export default () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>Gatsby</h1>
      <ul className={classes.menu}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact </Link>
        </li>
      </ul>
    </div>
  );
};
