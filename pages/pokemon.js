import React, { useRef, useState } from "react";
import styles from "../styles/pages css/PokemonDetails.module.css";
import Header from "../components/Header/Header";
import { useQuery, gql, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";
import Loader from "../components/Loader/Loader";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Evolutions from "../components/Evolutions/PokemonEvolutions";

function Pokemon() {
  const router = useRouter();
  const keyword = router.query;
  const [pokemonData, setPokemonData] = useState(null);
  const typeRef = useRef(null);

  const pokemonDetails = gql`
    query pokemon($id: String, $name: String) {
      pokemon(id: $id, name: $name) {
        id
        number
        name
        weight {
          minimum
          maximum
        }
        height {
          minimum
          maximum
        }
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        maxHP
        image
      }
    }
  `;

  const { loading, error, data } = useQuery(pokemonDetails, {
    variables: { id: keyword.id },
  });
  useEffect(() => {
    if (data) {
      setPokemonData(data.pokemon);
    }
  }, [data, pokemonData]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        {pokemonData && (
          <div>
            <div className={styles.title}>
              <div className={styles.pokemonName}>{pokemonData.name}</div>
              <div className={styles.pokemonSerial}>{pokemonData.number}</div>
            </div>
            <div className={styles.container1}>
              <div className={styles.container11}>
                <div className={styles.imageContainer}>
                  <div>
                    <Image
                      className={styles.pokeImage}
                      height={250}
                      width={250}
                      src={pokemonData.image}
                      alt={pokemonData.name}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.container2}>
                <div className={styles.pokemonDescription}>
                  <div className={styles.classification}>Classification:</div>
                  <div className={styles.Pokeclassification}>
                    {pokemonData.classification}
                  </div>
                </div>
                <div className={styles.container12}>
                  <div className={styles.heightContainer}>
                    Height
                    <div className={styles.heightInput}>
                      {pokemonData.height.minimum}
                    </div>
                  </div>
                  <div className={styles.weightContainer}>
                    Weight
                    <div className={styles.weightInput}>
                      {pokemonData.weight.minimum}
                    </div>
                  </div>
                  <div className={styles.abilityContainer}>
                    Ability
                    <div className={styles.abilityInput}>Overgrow</div>
                  </div>
                </div>
                <div className={styles.container22}>
                  <div className={styles.pokeType}>Type</div>
                  <div className={styles.types}>
                    {pokemonData.types.map((type) => (
                      <div ref={typeRef} key={type}>
                        {type}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.container223}>
                  <div className={styles.pokeWeakness}>Weaknesses</div>
                  <div className={styles.weaknesses}>
                    {pokemonData.weaknesses.map((weakness) => (
                      <div key={weakness} className="div">
                        {weakness}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Evolutions
              serialNo={pokemonData.number}
              id={keyword.id}
              name={pokemonData.name}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Pokemon;
