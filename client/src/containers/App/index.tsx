import React from 'react';

import styles from './App.module.scss';

import Header from '../Header';
import Gallery from '../Gallery';
import Credentials from '../Credentials';
import Videos from '../Videos';
import Shop from '../Shop';
import Info from '../Info';

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Gallery />
      <Credentials />
      <Videos />
      <Shop />
      <Info />
    </div>
  );
};

export default App;
