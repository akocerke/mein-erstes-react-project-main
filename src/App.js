// src/App.js
import React from 'react';
import './styles/App.css';
import Navigation from './components/Navigation/Navigationbar';
import Footer from './components/Footer/Footer';
import Gallerie from './components/Gallerie/Gallerie';
import Profile from './components/Profile/Profile';
import userData from './components/Profile/userData'; 

import LogIn from './components/Login/LogIn'; // 
import SignUp from './components/Signup/SignUp'; 


// REACT ICONS
import { RiAliensLine } from "react-icons/ri";
import { RiAndroidFill } from "react-icons/ri";
import { RiAppleLine } from "react-icons/ri";
import { RiAddLine } from "react-icons/ri";
import { RiEmotionLaughLine } from "react-icons/ri";
import { FaEquals } from "react-icons/fa";


function App() {
  return (
    
    <div>
      <header>
      <Navigation />
          
      </header>
      
      <section className='hauptteil'>
        <h2>GrinsGam: Instagram mal anders</h2>
        <RiAliensLine style={{ color: "white", fontSize: "5em" }} />
        <RiAddLine style={{ color: "white", fontSize: "5em" }}/>
        <RiAndroidFill style={{ color: "white", fontSize: "5em" }}/>
        <RiAddLine style={{ color: "white", fontSize: "5em" }}/>
        <RiAppleLine style={{ color: "white", fontSize: "5em" }}/> 
        <FaEquals style={{ color: "white", fontSize: "5em" }}/>
        <RiEmotionLaughLine style={{ color: "white", fontSize: "5em" }}/>
        
        <p>
          Hier gehts bald richtig ab!
        </p>

        <section>
        <Profile {...userData} />
        </section>

        <section>
          <Gallerie />
        </section>
        
      </section>
      <Footer />
    </div>
    
  );
}

export default App;
