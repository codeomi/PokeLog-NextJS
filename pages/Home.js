import React from "react";
import Link from "next/link";
import PokeCard from "../components/Card/PokeCard";
import styles from "../styles/pages css/Home.module.css";
import { Pagination } from "@mui/material";

export default function Main() {
  return (
    <>
      <div className={styles.container}>
        <div className="title">
          <h1 className="title">Pokelog</h1>
        </div>
        <div className={styles.pokeCards}>
        

          <PokeCard />
          <PokeCard />
          <PokeCard />
        
        </div>
        <div>
        <Pagination count={10} variant="outlined" />
        </div>
      </div>
    </>
  );
}
