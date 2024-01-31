// Footer.js (neue Komponente für den Footer)
import React from 'react';
import './Footer.css'
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} GrinsGram. Alle Rechte vorbehalten</p>
    </footer>
  );
}

export default Footer;
