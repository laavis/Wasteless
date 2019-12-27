import React from 'react';

import Footer from './Footer';
import Header from './Header';

import '../styles/main.scss';
import classes from '../styles/modules/layout.module.scss';

export default props => {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.content}>{props.children}</div>
      <Footer />
    </div>
  );
};
