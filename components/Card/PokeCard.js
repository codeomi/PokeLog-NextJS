import React from "react";
import Image from 'next/image'
import styles from "./PokeCard.module.css";

function PokeCard({title,serialNo,img,type}) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
        <Image className={styles.pokeImage}
      alt="Landscape picture"
     ></Image>
        </div>
        <div className={styles.description}>
          <div className={styles.serialNo}>001</div>
          <div className={styles.name}>Rhino</div>
          <div className={styles.type}>
            <div className="grass">grass</div>
            <div className="grass">water</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokeCard;
