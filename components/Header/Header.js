import React, { useState } from "react";
import { MenuItem, Select } from "@mui/material";
import styles from "./Header.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const currentRoute = router.pathname;
  // const [currentRoute, setCurrentRoute] = useState(router.pathname)
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            {" "}
            <h3>PokeLog</h3>
          </Link>
        </div>
        <div className={styles.details}>
          <Link
            href="/"
            className={currentRoute === "/" ? styles.active : styles.nonActive}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={
              currentRoute === "/about" ? styles.active : styles.nonActive
            }
          >
            About Me
          </Link>
        </div>
      </div>
    </>
  );
}
