import React, { FunctionComponent } from 'react';
import styles from './GradientBorderButton.module.scss';
import { Link } from 'react-router-dom';

interface IButtonProps {
  url: string;
  text: string;
  marginTop: string;
}

const GradientBorderButton: FunctionComponent<IButtonProps> = ({
  url,
  text,
  marginTop
}) => {
  return (
    <Link
      to={url}
      className={styles.GradientBorderButton}
      style={{ marginTop: `${marginTop}` }}>
      <span>{text}</span>
    </Link>
  );
};

export default GradientBorderButton;
