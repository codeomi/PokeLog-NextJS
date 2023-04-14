import { gql, useQuery } from "@apollo/client";
import { Button, Drawer } from "@mui/material";
import React, { useState, useEffect } from "react";
import styles from "./PokemonEvolutions.module.css";
import Image from "next/image";

const PokemonEvolutions = ({ id, name }) => {
  const [evolutionData, setEvolutionData] = useState(null);
  const [open, setOpen] = useState(false);

  const RecursivePokemonFragment = gql`
    fragment RecursivePokemonFragment on Pokemon {
      id
      name
      number
      image
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      evolutions {
        id
        name
        number
        image
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        maxHP
      }
    }
  `;

  const evolution = gql`
    query pokemon($id: String, $name: String) {
      pokemon(id: $id, name: $name) {
        id
        name
        evolutions {
          ...RecursivePokemonFragment
        }
      }
    }
    ${RecursivePokemonFragment}
  `;
  console.log(id);
  const { loading, error, data } = useQuery(evolution, {
    variables: { id: id, name: name },
  });

  console.log(error instanceof Error);
  useEffect(() => {
    if (data) {
      setEvolutionData(data);
    }
  }, [data]);

  console.log(data && data.pokemon.evolutions);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const DrawerContainer = () => {
    return (
      <>
        <div className={styles.drawerContainer}>
          <div className={styles.drawerContainer1}>
            <div className={styles.upcomingEvolutionsTitle}>Upcoming Evolutions</div>
            <div className={styles.underLine}></div>
            <div className={styles.evolutionMap}>
              {data.pokemon.evolutions?.map((evolve,index) => (
                
                <div key={evolve.id} className={styles.pokemonEvolveContainer}>
                  <Image
                  className={styles.evolveImage}
                    src={evolve.image}
                    height={160}
                    width={160}
                    alt="pokemon image"
                  ></Image>
                  <div className={styles.pokemonEvolvename}>{evolve.name}</div>
                  <div classname={styles.indexNo} >{data.pokemon.evolutions.length>1?(index+1):""}</div>
                  <div classname={styles.arrow}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className={styles.mainDrawer}>
      <div className={styles.evolutionBtn} onClick={() => toggleDrawer()}>
        Check Evolution
      </div>
      <Drawer anchor="bottom" open={open} onClose={() => toggleDrawer()}>
        <DrawerContainer />
      </Drawer>
    </div>
  );
};

export default PokemonEvolutions;
