import { FunctionComponent } from 'react';
import styles from './Info.module.scss';

interface IinfoProps {}

const Info: FunctionComponent<IinfoProps> = () => {
  return (
    <div className={styles.Info}>
      <h1>Some text with parallax effect</h1>
    </div>
  );
};

export default Info;
