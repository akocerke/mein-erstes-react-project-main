// Home.js
import React from 'react';
import styles from './Home.module.css';
import Profile from '../Profile/Profile'; // Passe den Pfad entsprechend an
import Gallerie from '../Gallerie/Gallerie'; // Passe den Pfad entsprechend an

// REACT ICONS
import { RiAliensLine } from "react-icons/ri";
import { RiAndroidFill } from "react-icons/ri";
import { RiAppleLine } from "react-icons/ri";
import { RiAddLine } from "react-icons/ri";
import { RiEmotionLaughLine } from "react-icons/ri";
import { FaEquals } from "react-icons/fa";

function Home() {
  return (
    <div>
      <div className={styles['willkommen']}>
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
      </div>
      

      <section>
        <h3>User Profil</h3>
        <Profile />
      </section>

      <section>
        <h3>User Galerie</h3>
        <Gallerie />
      </section>
    </div>
  );
}

export default Home;
