import React from "react";
import Link from "next/link";
import PokeCard from "../components/Card/PokeCard";
import styles from "../styles/pages css/Home.module.css";
import { Pagination } from "@mui/material";
import Loader from "../components/Loader/Loader";

export default function Main({pokemon,loading,error}) {
  console.log(loading)
  return (
    <>{
      loading ? <Loader/>:<>
    
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
      </div></>
}</>
  );
}
