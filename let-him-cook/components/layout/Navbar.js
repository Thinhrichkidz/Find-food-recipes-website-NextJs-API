import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classes from './Navbar.module.scss';
import logo from '../../images/logo.jpg';

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <Link href="/">
        <a className={classes.logo}>
          <Image src={logo} alt="logo" />
        </a>
      </Link>
      <ul className={classes.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#">Menu</Link>
        </li>
        <li>
          <Link href="/meals">Meals</Link>
        </li>
        <li>
          <Link href="#">Service</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
