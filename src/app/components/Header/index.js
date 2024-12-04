'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import Styles from './style.module.css';
import UserMenu from '../UserMenu';
import { useContext } from 'react';
import { TokenContext } from '../../context/TokenContext';

export default function Header() {
  const pathname = usePathname(); 
  const { isLoggedIn } = useContext(TokenContext);

  return (
    <header className={Styles.header}>
      <div className={Styles.logoContainer}>
        <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>
          <img src="/logo.png" alt="Logo" className={Styles.logo} />
        </Link>
      </div>
      <nav className={Styles.nav}>
        <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>
          Home
        </Link>
        <Link href="/contacto" aria-current={pathname === '/contacto' ? 'page' : undefined}>
          Contacto
        </Link>
      </nav>
<UserMenu />
    </header>
  );
}
