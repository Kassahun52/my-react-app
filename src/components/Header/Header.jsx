import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>My Logo</h1>
      </div>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
      <div className={styles.contact}>
        <p>Phone: 123-456-7890 | Email: info@example.com</p>
        <button className={styles.signInButton}>Sign In</button>
      </div>
    </header>
  );
};

export default Header;
