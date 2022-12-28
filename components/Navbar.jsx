import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";//llamos asi los estilos si son exclisibos de este componente

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};
