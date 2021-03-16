import React, { FunctionComponent } from 'react';
import styles from './Credentials.module.scss';

import SectionName from '../../utilities/SectionName';
import Slider from '../../components/Slider';
interface ICredentialsProps {}

const Credentials: FunctionComponent<ICredentialsProps> = () => {
  return (
    <div className={styles.Credentials} id='credentials'>
      <SectionName name='Credentials' color='#fff' top='5vh' left='7vw' />
      <Slider />
    </div>
  );
};

export default Credentials;
