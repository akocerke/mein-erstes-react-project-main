// // LogIn.js
// import React from 'react';
// import styles from './Login.module.css';

// function LogIn() {
//   const onSubmitForm = (event) => {
//     event.preventDefault();
//     // Füge die Logik für die Anmeldung hinzu
//     console.log('Anmelden');
//   };

//   return (
//     <div className={styles['anmelden']}>
//       <div className={styles['form']}>
//         <h1>Anmelden</h1>
//         <form onSubmit={onSubmitForm}>
//           <label htmlFor="email">E-Mail:</label>
//           <input type="email" id="email" name="email" required />

//           <label htmlFor="password">Passwort:</label>
//           <input type="password" id="password" name="password" required />

//           <input className={styles['submit']} type="submit" value="Anmelden" />
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import styles from './Login.module.css';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const hidePassword = (password) => '*'.repeat(password.length);

  const onSubmitForm = (event) => {
    event.preventDefault();
    // Füge die Logik für die Anmeldung hinzu
    // z.B. eine API-Anfrage für die Anmeldung senden => z.b DynamoDB etc

    // Beispiel: Annahme, dass die Anmeldung erfolgreich ist
    setLoggedIn(true);
  };

  return (
    <div className={styles['anmelden']}>
      <div className={styles['form']}>
        <h1>Anmelden</h1>
        <form onSubmit={onSubmitForm}>
          <label htmlFor="email">E-Mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Passwort:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input className={styles['submit']} type="submit" value="Anmelden" />
        </form>

        {loggedIn && (
          <div className={styles['userData']}>
            <h2>Willkommen zurück!</h2>
            <p>Du bist jetzt angemeldet.</p>
            <div>
              <p><strong>E-Mail: </strong> {email}</p>
              <p><strong>Passwort: </strong> {hidePassword(password)}</p>
            </div>
            {/* Weitere Daten hier darstellen */}
          </div>
        )}
      </div>
    </div>
  );
}

export default LogIn;
