import React from 'react';
import styles from './Info.module.scss';

const Info = () => {
  return (
    <div className={styles.Info}>
      <p>Hair: Luni-Samb 8am-8pm/Dum 8am-5pm</p>
      <p>Telefon: +373-123456789</p>
      <p>Adresa: str. Alecu Russo 1014, Chisinau, MD [Post-code]</p>
    </div>
  );
};

export default Info;
