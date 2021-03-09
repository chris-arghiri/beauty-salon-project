import React from 'react';

import Header from '../Header';
import Gallery from '../Gallery';
import Credentials from '../Credentials';
import Videos from '../Videos';
import Shop from '../Shop';
import Info from '../Info';

const App = () => {
  return (
    <>
      <Header />
      <Gallery />
      <Credentials />
      <Videos />
      <Shop />
      <Info />
    </>
  );
};

export default App;
