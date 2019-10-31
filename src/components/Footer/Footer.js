import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Created by
        <a
          href="https://github.com/Alexeychuk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alekseychuk
        </a>
      </p>
    </footer>
  );
};

export default Footer;
