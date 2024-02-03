// SignUp.js
import React from 'react';
import styles from './SignUp.module.css';

function SignUp() {
  const onSignUpForm = (event) => {
    event.preventDefault();
    // Füge die Logik für die Registrierung hinzu
    console.log('Registrieren');
  };

  return (
    <div className={styles['registrieren']}>
      <div className={styles['form']}>
        <h1>Registrieren</h1>
        <form onSubmit={onSignUpForm}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">E-Mail:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Passwort:</label>
          <input type="password" id="password" name="password" required />

          <input className={styles['submit']} type="submit" value="Registrieren" />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
