import React from "react";
import { MenuItem, Select } from "@mui/material";
import styles from  "./Header.module.css"
import { useRouter } from "next/router";
import Link from "next/link";


export default function Header() {
  const router = useRouter()
  const currentRoute = router.pathname
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <h3>PockeLog</h3>
        </div>
        <div className={styles.details}>
        <Link href='/' className={currentRoute === '/' ? styles.active : styles.nonActive}>
        Home
      </Link>

      <Link
        href='/about'
        className={currentRoute === '/about' ? styles.active : styles.nonActive}
      >
        About
      </Link>

      <Link
        href='/contact'
        className={currentRoute === '/contact' ? styles.active : styles.nonActive}
      >
        Contact
      </Link>
        </div>
      </div>
    </>
  );
}
