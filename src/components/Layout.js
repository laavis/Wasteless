import React from 'react';

import Footer from './Footer';
import Header from './Header';

import '../styles/main.scss';
import classes from '../styles/modules/layout.module.scss';

export default props => {
  return (
    <div className={classes.container}>
      <Header />
      <main className={classes.content}>{props.children}</main>
      <Footer />
    </div>
  );
};
