// LogIn.js
import React from 'react';

function LogIn() {
  const onSubmitForm = (event) => {
    event.preventDefault();
    // Füge die Logik für die Anmeldung hinzu
    console.log('Anmelden');
  };

  return (
    <div className="anmelden">
      <div className="form">
        <h1>Anmelden</h1>
        <form onSubmit={onSubmitForm}>
          <label htmlFor="email">E-Mail:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Passwort:</label>
          <input type="password" id="password" name="password" required />

          <input className="submit" type="submit" value="Anmelden" />
        </form>
      </div>
    </div>
  );
}

export default LogIn;
