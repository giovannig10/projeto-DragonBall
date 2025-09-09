"use client";
import { useState, } from "react";
import styles from './Header.module.css';
import Image from "next/image";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <Image className={styles.logoHeader}
              src="/img/simbolo-goku.jpg"
              alt="Dragon Ball Icon"
              width={40}
              height={40}
            />
          </div>
          <h1 className={styles.logoText}>
            Dragon Ball Universe
          </h1>
        </div>

        {/* Menu Desktop */}
        <nav className={styles.nav}>
          <a href="/" className={styles.navLink}>
            Personagens
          </a>
          <a href="/pages/planetas" className={styles.navLink}>
            Planetas
          </a>
          <a href="#" className={styles.navLink}>
            Sobre
          </a>
          
          {/* Botão CTA */}
          <button className={styles.ctaButton}>
            Explorar Universo
          </button>
        </nav>

        {/* Menu Mobile */}
        <button 
          onClick={() => setMenuAberto(!menuAberto)}
          className={styles.mobileMenuButton}
        >
          ☰
        </button>
      </div>

      
    
    </header>
  );
}
