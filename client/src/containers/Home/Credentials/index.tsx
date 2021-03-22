import { FunctionComponent } from 'react';
import styles from './Credentials.module.scss';

import SectionName from '../../../utilities/SectionName';
import Swiper from '../../../components/Swiper';

interface ICredentialsProps {}

const Credentials: FunctionComponent<ICredentialsProps> = () => {
  return (
    <div className={styles.Credentials} id='credentials'>
      <SectionName name='Credentials' color='#fff' top='5vh' left='7vw' />
      <Swiper />
    </div>
  );
};

export default Credentials;
