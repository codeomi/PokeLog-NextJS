import React from "react";
import styles from "../styles/pages css/PokemonDetails.module.css";
import Header from "../components/Header/Header";
import { style } from "@mui/system";

function pokemon() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.pokemonName}>Rhino</div>
          <div className={styles.pokemonSerial}>0002</div>
        </div>
        <div className={styles.container1}>
          <div className={styles.container11}>
            <div className={styles.imageContainer}>
              <div>Image goes here</div>
            </div>
            <div className="container-1-2">
              <div className="statistics">Statistics</div>
            </div>
          </div>
          <div className={styles.container2}>
            <div className={styles.pokemonDescription}>
              When the bulb on its back grows large, it appears to lose the
              ability to stand on its hind legs.
            </div>
            <div className={styles.container12}>
              <div className={styles.heightContainer}>
                Height
                <div className={styles.heightInput}>5</div>
              </div>
              <div className={styles.categoryContainer}>
                Category
                <div className={styles.categoryInput}>Grass</div>
              </div>
              <div className={styles.weightContainer}>
                Weight
                <div className={styles.weightInput}>54kg</div>
              </div>
              <div className={styles.abilityContainer}>
                Ability
                <div className={styles.abilityInput}>Overgrow</div>
              </div>
            </div>
            <div className={styles.container22}>
              <div className={styles.pokeType}>Type</div>
              <div className={styles.types}>
                <div className="div">Grass</div>
                <div className="div">Poison</div>
              </div>
            </div>
            <div className={styles.container223}>
              <div className={styles.pokeWeakness}>Weaknesses</div>
              <div className={styles.weaknesses}>
                <div className="div">fire</div>
                <div className="div">fire</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-2">Evolutions</div>
      </div>
    </>
  );
}

export default pokemon;
