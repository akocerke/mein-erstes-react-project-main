// Profile.js

import React from 'react';
import styles from './Profile.module.css'; // Importiere das CSS-Modul Profile
import Button from '../Button/Button'; // Importiere die Button-Komponente

const Profile = (props) => {
  const { username, profileImage, posts, followers, following, bio } = props;

  return (
    <div className={styles.flexbox}>
      <div className={styles.profil}>
        <div className={styles['profil-bild']}>
          <img className={styles['profil-bild-image']} src={profileImage} alt={`${username}'s Profilbild`} />
        </div>
        <div className={styles.profilkram}>
          <div className={styles['profil-info']}>
            <p className={styles['label-profil']}>{username}</p>
            {/* <button> Folgen</button>
            <button> Nachricht senden</button>
            <button> ...</button> */}
            <Button label="Folgen" onClick={() => console.log('Folgen Button wurde geklickt')} />
            <Button label="Nachricht senden" onClick={() => console.log('Nachricht senden Button wurde geklickt')} />
            <Button label="..." onClick={() => console.log('Weitere Aktionen Button wurde geklickt')} />
          </div>
          <div className={styles['profil-stats']}>
            <label className={styles.stats}>{posts} Beiträge</label>
            <label className={styles.stats}>{followers} Follower</label>
            <label className={styles.stats}>{following} gefolgt</label>
          </div>
          <div className={styles['profil-bio']}>
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
