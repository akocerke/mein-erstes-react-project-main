// // SignUp.js
// import React from 'react';
// import styles from './SignUp.module.css';

// function SignUp() {
//   const onSignUpForm = (event) => {
//     event.preventDefault();
//     // Füge die Logik für die Registrierung hinzu
//     console.log('Registrieren');
//   };

//   return (
//     <div className={styles['registrieren']}>
//       <div className={styles['form']}>
//         <h1>Registrieren</h1>
//         <form onSubmit={onSignUpForm}>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" name="name" required />

//           <label htmlFor="email">E-Mail:</label>
//           <input type="email" id="email" name="email" required />

//           <label htmlFor="password">Passwort:</label>
//           <input type="password" id="password" name="password" required />

//           <input className={styles['submit']} type="submit" value="Registrieren" />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignUp;
import React, { useState } from 'react';
import styles from './SignUp.module.css';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registered, setRegistered] = useState(false);

  const onSignUpForm = (event) => {
    event.preventDefault();
    // Hier würde die Logik für die Registrierung mit einer API-Aufruf oder Datenbankinteraktion sein
    // Für diesen Beispielcode setzen wir nur den Zustand "registered" auf true
    setRegistered(true);
  };

  return (
    <div className={styles['registrieren']}>
      <div className={styles['form']}>
        <h1>Registrieren</h1>
        <form onSubmit={onSignUpForm}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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

          <input className={styles['submit']} type="submit" value="Registrieren" />
        </form>

        {registered && <p>Registrierung erfolgreich! Bitte melde dich an.</p>}
      </div>
    </div>
  );
}

export default SignUp;
