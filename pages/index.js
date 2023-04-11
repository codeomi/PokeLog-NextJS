import Head from "next/head";
// import { useQuery, gql } from "@apollo/client";
import Main from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import React from "react"


// const getPokemons = gql`
//   query GetPokemons($first: Int!, $offset: Int!) {
//     pokemons(first: $first, offset: $offset) {
//       results {
//         id
//         name
//         image
//         types
//       }
//     }
//   }
// `;

export default function Home() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}
