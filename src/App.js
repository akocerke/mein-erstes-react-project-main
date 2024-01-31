// src/App.js
import React from 'react';
import Navigation from './components/Navigation/Navigationbar';
import Footer from './components/Footer/Footer';
import Gallerie from './components/Gallerie/Gallerie';

import './styles/App.css';

function App() {
  return (
    <div>
      <header>
      <Navigation />
      </header>
      
      <section>
        <h2>GrinsGam: Instagram mal anders</h2>

        <p>
          Hier gehts bald richtig ab!
        </p>
        <Gallerie />
      </section>
      <Footer />
    </div>
  );
}

export default App;
