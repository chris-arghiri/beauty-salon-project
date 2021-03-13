import React, { FunctionComponent } from 'react';
import styles from './InfoCard.module.scss';

import GradientBorderButton from '../../utilities/GradientBorderButton';

interface IinfoCardProps {}

const InfoCard: FunctionComponent<IinfoCardProps> = () => {
  return (
    <div className={styles.InfoCard}>
      <h1>Some information here</h1>
      <h3>And another information</h3>
      <GradientBorderButton url='#' text='Press here →' />
    </div>
  );
};

export default InfoCard;
