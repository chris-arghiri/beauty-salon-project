import React, { FunctionComponent } from 'react';
import styles from './Info.module.scss';

interface IinfoProps {}

const Info: FunctionComponent<IinfoProps> = () => {
  return <div className={styles.Info} id='info'></div>;
};

export default Info;
