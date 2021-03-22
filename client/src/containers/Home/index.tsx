import { FunctionComponent } from 'react';
import styles from './Home.module.scss';

import Header from './Header';
import GallerySection from './GallerySection';
import Credentials from './Credentials';
import Videos from './Videos';
import ShopSection from './ShopSection';
import Info from './Info';

interface IHomeProps {}

const Home: FunctionComponent<IHomeProps> = () => {
  return (
    <div className={styles.Home}>
      <Header />
      <GallerySection />
      <Credentials />
      <Videos />
      <ShopSection />
      <Info />
    </div>
  );
};

export default Home;
