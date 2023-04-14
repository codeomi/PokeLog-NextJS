import React, {useState, useEffect } from "react";
import Link from "next/link";
import PokeCard from "../components/Card/PokeCard";
import styles from "../styles/pages css/Home.module.css";
import { Pagination } from "@mui/material";
import Loader from "../components/Loader/Loader";
import { useQuery, gql } from "@apollo/client";

export default function Main({ pokemon }) {
  const [pokemonArr, setPokemonArr] = useState([])

  const getPokemons = gql`
    query pokemons($first: Int!) {
      pokemons(first: $first) {
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
  const { loading, error, data } = useQuery(getPokemons, {
    variables: { first: 20, offset: 0 },
  });  
  console.log(data) 

  
  return (
    <>
      <div className={styles.container}>
        <div className="title">
          <h1 className="title">Pokelog</h1>
        </div>
        <div className={styles.pokeCards}>
          {data?.pokemons.map((poke) => (
            <PokeCard poke={poke} key={poke.id} />
          ))}
        </div>
        <div>
          <Pagination count={10} variant="outlined" />
        </div>
      </div>
    </>
  );
}
