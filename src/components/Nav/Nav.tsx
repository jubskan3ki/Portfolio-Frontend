import React from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Accueil</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/stack">Stack</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/projet">Projets</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/log">Journal</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
