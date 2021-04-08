import { FunctionComponent } from 'react';
import styles from './Home.module.scss';

import Header from './Header';
import GallerySection from './GallerySection';
import Credentials from './Credentials';
import Info from './Info';
import Videos from './Videos';
import ShopSection from './ShopSection';
import Maps from './Maps';

interface IHomeProps {}

const Home: FunctionComponent<IHomeProps> = () => {
  return (
    <div className={styles.Home}>
      <Header />
      <GallerySection />
      <Credentials />
      <Info />
      <Videos />
      <ShopSection />
      <Maps />
    </div>
  );
};

export default Home;
