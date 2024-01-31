// Button.js
import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick, label }) => {
  return (
    <button className={styles['standard-btn']} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
