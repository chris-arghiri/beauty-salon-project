import { FunctionComponent } from 'react';
import styles from './Credentials.module.scss';

import SectionName from '../../../utilities/SectionName';
import Swiper from '../../../components/Swiper';

interface ICredentialsProps {}

const Credentials: FunctionComponent<ICredentialsProps> = () => {
  return (
    <div className={styles.Credentials} id='credentials'>
      <Swiper />
      <SectionName
        name='Credentials'
        color='var(--color-white)'
        bottom='0'
        left='0'
        right='0'
        top=''
      />
    </div>
  );
};

export default Credentials;
