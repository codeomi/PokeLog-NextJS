import React, { useState, useEffect } from "react";
import Link from "next/link";
import PokeCard from "../components/Card/PokeCard";
import styles from "../styles/pages css/Home.module.css";
import { Pagination } from "@mui/material";
import Loader from "../components/Loader/Loader";
import { useQuery, gql,initializeApollo } from "@apollo/client";
import {isBrowser, isMobile } from "react-device-detect";
import MobileLoader from "../components/MobileLoader/MobileLoader";

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

const POKEMON_PER_PAGE = 20;
const NUM_PAGES = 3;

export default function Main({ initialData }) {
  const [currentPage, setCurrentPage] = useState(1);

  const { loading, data, error, refetch, networkStatus } = useQuery(
    getPokemons,
    {
      variables: {
        first: POKEMON_PER_PAGE,
        offset: (currentPage - 1) * POKEMON_PER_PAGE,
      },
      skip: !!initialData,
      initialData,
      notifyOnNetworkStatusChange: true,
    }
  );

  console.log(data);

  // const pokemons = data.pokemons.results

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    if (networkStatus !== 4) {
      refetch({
        first: POKEMON_PER_PAGE,
        offset: (value - 1) * POKEMON_PER_PAGE,
      });
    }
  };

  if(loading ){
    return <Loader/>
  }
  if(loading && isMobile){
    return <MobileLoader/>
  }

  // const getPokemons = gql`
  //   query pokemons($first: Int!) {
  //     pokemons(first: $first) {
  //       id
  //       number
  //       name
  //       weight {
  //         minimum
  //         maximum
  //       }
  //       height {
  //         minimum
  //         maximum
  //       }
  //       classification
  //       types
  //       resistant
  //       weaknesses
  //       fleeRate
  //       maxCP
  //       maxHP
  //       image
  //     }
  //   }
  // `;
  // const { loading, error, data } = useQuery(getPokemons, {
  //   variables: { first: 20, offset: 0 },
  // });
  // console.log(data);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Pokelog</h1>
        </div>
        <div className={styles.pokeCards}>
          {data?.pokemons.map((poke) => (
            <PokeCard
              poke={poke}
              key={poke.id}
              id={poke.id}
              types={poke.types}
            />
          ))}
        </div>
        <div>
          <Pagination
            count={NUM_PAGES}
            page={currentPage}
            onChange={(event, value) => handlePageChange(event, value)}
            color="primary"
            variant="outlined"
          />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // const limit = POKEMON_PER_PAGE;
  // let offset = 0;
  const apolloClient = initializeApollo();

  const pages = Array.from({ length: NUM_PAGES }).map((_, i) => i + 1);

  const initialData = await Promise.all(
    pages.map((page) =>
      apolloClient.query({
        query: getPokemons,
        variables: {
          first: POKEMON_PER_PAGE,
          offset: (page - 1) * POKEMON_PER_PAGE,
        },
      })
    )
  );

  return {
    props: {
      initialData: initialData.map((result) => result.data),
    },
    revalidate: 1,
  };
}
