// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Υπηρεσίες Ηλεκτρολόγου. Με επιφύλαξη παντός δικαιώματος.</p>
      </div>
    </footer>
  );
}

export default Footer;
