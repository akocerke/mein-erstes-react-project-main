// Footer.js
import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        <div className={styles['footer-section']}>
          <h3>Informationen</h3>
          <ul>
            <li><a href="/">Impressum</a></li>
            <li><a href="/">Datenschutz</a></li>
            <li><a href="/">Info</a></li>
            <li><a href="/">Blog</a></li>
          </ul>
        </div>

        <div className={styles['footer-section']}>
          <h3>Unternehmen</h3>
          <ul>
            <li><a href="/">Jobs</a></li>
            <li><a href="/">Hilfe</a></li>
          </ul>
        </div>

        <div className={styles['footer-section']}>
          <h3>Ressourcen</h3>
          <ul>
            <li><a href="/">API</a></li>
            <li><a href="/">Datenrichtlinie</a></li>
            <li><a href="/">Cookie-Einstellungen</a></li>
          </ul>
        </div>
      </div>
      <p>&copy; {currentYear} GrinsGram. Alle Rechte vorbehalten</p>
    </footer>
  );
}

export default Footer;
