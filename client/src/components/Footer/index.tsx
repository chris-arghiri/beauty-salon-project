import { FunctionComponent } from 'react';
import styles from './Footer.module.scss';

interface IFooterProps {}

const Footer: FunctionComponent<IFooterProps> = () => {
  return (
    <div className={styles.Footer}>
      <ul className={styles.Footer__social}>
        <li>
          <a href='/instagram'>First</a>
        </li>
        <li>
          <a href='/facebook'>Second</a>
        </li>
        <li>
          <a href='/telegram?'>Third</a>
        </li>
        <li>
          <a href='/viber?'>Fourth</a>
        </li>
      </ul>
      <div className={styles.Footer__text}>
        <h1> Some text should be here with the gradient signature</h1>
      </div>
    </div>
  );
};

export default Footer;
