import { FunctionComponent } from 'react';
import styles from './Footer.module.scss';

interface IFooterProps {}

const Footer: FunctionComponent<IFooterProps> = () => {
  return <div className={styles.Footer}></div>;
};

export default Footer;
