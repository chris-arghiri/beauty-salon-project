import React from 'react';
import styles from './Header.module.scss';
import Sidebar from './Sidebar';

const Header = () => {
  return (
    <div className={styles.Header}>
      <Sidebar />
      <div className={styles.Header__text}>
        <h2>The App is working! Don't worry</h2>
        <p>Something there</p>
        <p style={{ fontSize: '0.5rem' }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero porro
          provident quis dolores minus ut ipsam modi est non mollitia, qui
        </p>
        <a href='#' style={{ fontSize: '1rem' }}>
          LINK TO SOMETHING
        </a>
      </div>
      <div
        style={
          {
            // display: 'flex',
            // width: '10rem',
            // justifyContent: 'space-between',
            // alignItems: ''
          }
        }>
        <ul>
          <li>
            <a href='#' style={{ marginLeft: '0.5rem', color: '#fff' }}>
              About
            </a>
          </li>
          <li>
            <a href='#' style={{ marginLeft: '0.5rem', color: '#fff' }}>
              About
            </a>
          </li>
          <li>
            <a href='#' style={{ marginLeft: '0.5rem', color: '#fff' }}>
              About
            </a>
          </li>
          <li>
            <a href='#' style={{ marginLeft: '0.5rem', color: '#fff' }}>
              About
            </a>
          </li>
          <li>
            <a href='#' style={{ marginLeft: '0.5rem', color: '#fff' }}>
              About
            </a>
          </li>
          <li>
            <a href='#' style={{ marginLeft: '0.5rem', color: '#fff' }}>
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
