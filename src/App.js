// src/App.js
import React from 'react';
import './styles/App.css';
import Navigation from './components/Navigation/Navigationbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import LogIn from './components/Login/LogIn'; 
import SignUp from './components/Signup/SignUp'; 



function App() {
  return (
    <Router>
      <div>
        <header>
          <Navigation />
        </header>
      
        <section className='hauptteil'>
          

          <section className='content'>
          <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} /> {/* Route für die Home-Seite */}
          </Routes>


          </section>
        
        </section>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
