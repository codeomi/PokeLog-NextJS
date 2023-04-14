import React from "react";
import Image from "next/image";
import styles from "./PokeCard.module.css";
import Link from "next/link";


function PokeCard({poke}) {
  const {name,id,number,types,image} = poke
  return (
    <>
      <Link className={styles.linktag} href={{pathname:"/pokemon", query:{id:id}}}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image height={180} width={165} className={styles.pokeImage} src={image}  alt="Landscape picture"></Image>
          </div>
          <div className={styles.description}>
            <div className={styles.serialNo}>{number}</div>
            <div className={styles.name}>{name}</div>
            <div className={styles.type}>
              {types.map((type)=>(<div key={type}>{type}</div>))}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default PokeCard;
