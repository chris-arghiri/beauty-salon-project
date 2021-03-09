import React, { FunctionComponent } from 'react';
import styles from './Credentials.module.scss';

interface ICredentialsProps {}

const Credentials: FunctionComponent<ICredentialsProps> = () => {
  return <div className={styles.Credentials} id='credentials'></div>;
};

export default Credentials;
