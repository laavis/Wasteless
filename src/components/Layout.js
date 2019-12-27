import React from 'react';

import Footer from './Footer';
import Header from './Header';

import '../styles/main.scss';

export default props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
