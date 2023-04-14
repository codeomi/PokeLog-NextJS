import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import Main from "./Home";
import Header from "../components/Header/Header";
import Footer from "./Footer";
import React from "react";

export default function Home() {
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
  return (
    <>
      <Header></Header>
      <Main></Main>
    </>
  );
}
