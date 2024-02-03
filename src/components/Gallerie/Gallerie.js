import React, { useState, useEffect } from 'react';
import styles from './Gallerie.module.css';
import { faker } from '@faker-js/faker';

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Simuliere die Datenbankabfrage beim Mounten der Komponente
    simulateDatabaseQuery(() => {
      // Lade die Bilder nach der Datenbankabfrage
      loadImages();
    });
  }, []); // Leeres Array als Abhängigkeit bedeutet, dass der Effekt nur einmal beim Mounten ausgeführt wird

  function simulateDatabaseQuery(callback) {
    // Simuliere eine Datenbankabfrage mit einem Timeout von 2 Sekunden
    setTimeout(callback, 2000);
  }

  function loadImages() {
    // JSON-Daten mit Bild-URLs (Beispiel)
    const jsonData = {
      images: [
        faker.image.urlLoremFlickr({category:"nature"}),
        faker.image.urlLoremFlickr({category:"dogs"}),
        faker.image.urlLoremFlickr({category:"cats"}),
        faker.image.urlLoremFlickr({category:"nature"}),
        faker.image.urlLoremFlickr({category:"food"}),
        faker.image.urlLoremFlickr({category:"nightlife"}),
        faker.image.urlLoremFlickr({category:"sports"}),
        faker.image.urlLoremFlickr({category:"horse"}),
        faker.image.urlLoremFlickr({category:"nature"}),
        faker.image.urlLoremFlickr({category:"dogs"}),
        faker.image.urlLoremFlickr({category:"cats"}),
        faker.image.urlLoremFlickr({category:"nature"}),
        faker.image.urlLoremFlickr({category:"food"}),
        faker.image.urlLoremFlickr({category:"nightlife"}),
        faker.image.urlLoremFlickr({category:"rabbit"}),
        faker.image.urlLoremFlickr({category:"horse"})
        
        

        // ... weitere Bild-URLs
      ]
    };

    // Setze die Bilder im State
    setImages(jsonData.images);

    // Starte die Fortschrittsanimation
    startProgressAnimation();
  }

  function startProgressAnimation() {
    // Automatisch alle 10 Millisekunden die Funktion aufrufen
    const intervalID = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          // Wenn der Fortschritt 100 erreicht hat, beende die Animation
          clearInterval(intervalID);
          setLoading(false);
        }

        // Erhöhe den Fortschritt um 1
        return prevProgress + 1;
      });
    }, 10);
  }

  return (
    <div>
      {loading && (
          <div id="callback" className={styles.callback}>
            <div id="myBar" style={{ width: `${progress}%` }} className={styles.myBar}>
              Loading...
            </div>
          </div>
        )}
      <div className={styles.gallerie}>
        {images.map((imageUrl, index) => (
          <div key={index} className={styles['image-container']}>
            <img src={imageUrl} alt={`Bild ${index + 1}`} />

          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
