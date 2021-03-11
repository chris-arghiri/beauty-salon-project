import React, { FunctionComponent } from 'react';
import styles from './GradientBorderButton.module.scss';

interface IButtonProps {
  url: string;
  text: string;
}

const GradientBorderButton: FunctionComponent<IButtonProps> = ({
  url,
  text
}) => {
  return (
    <a href={url} className={styles.GradientBorderButton}>
      <span>{text}</span>
    </a>
  );
};

export default GradientBorderButton;
