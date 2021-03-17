import React, { FunctionComponent } from 'react';
import styles from './Credentials.module.scss';

import sliderImage1 from '../../assets/images/tiny_makeup.jpg';
import sliderImage2 from '../../assets/images/tiny_makeup.jpg';
import sliderImage3 from '../../assets/images/tiny_makeup.jpg';

import SectionName from '../../utilities/SectionName';
import Slider from '../../components/Slider';
interface ICredentialsProps {}

const Credentials: FunctionComponent<ICredentialsProps> = () => {
  const images = [`${sliderImage1}`, `${sliderImage2}`, `${sliderImage3}`];

  return (
    <div className={styles.Credentials} id='credentials'>
      <SectionName name='Credentials' color='#fff' top='5vh' left='7vw' />
      <Slider slides={images} />
    </div>
  );
};

export default Credentials;
