import React from 'react';
import { Link } from 'gatsby';

import classes from '../styles/modules/arrow-button.module.scss';
import globalClasses from '../styles/modules/global.module.scss';

export default ({ text }) => {
  return (
    <Link className={classes.link} to="/">
      {text}
      <span className={`${globalClasses.iconWrapper} ${classes.arrow}`}></span>
    </Link>
  );
};
