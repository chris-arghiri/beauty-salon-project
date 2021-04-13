import { FunctionComponent } from 'react';
import styles from './Footer.module.scss';

interface IFooterProps {}

const Footer: FunctionComponent<IFooterProps> = () => {
  return (
    <div className={styles.Footer}>
      <ul className={styles.Footer__social}>
        <li>
          <a href='#'>First</a>
        </li>
        <li>
          <a href='#'>Second</a>
        </li>
        <li>
          <a href='#'>Third</a>
        </li>
        <li>
          <a href='#'>Fourth</a>
        </li>
      </ul>
      <div className={styles.Footer__text}>
        <h1> Some text should be here</h1>
      </div>
    </div>
  );
};

export default Footer;
