import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

const styles = StyleSheet.create({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    justifyContent: 'space-around',
    backgroundColor: '#BF3904',
    padding: '20px',
    margin: '0',
  },
  link: {
    fontSize: '250%',
    border: '2px solid #420029',
    borderTopLeftRadius: '150px',
    borderTopRightRadius: '150px',
    textDecoration: 'none',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontWeight: 'bolder',
    padding: '10px 100px',
  },
});

const Nav = () => (
  <nav>
    <ul className={css(styles.nav)}>
      <li><Link className={css(styles.link)} to="/Waiter">Garçon</Link></li>
      <li><Link className={css(styles.link)} to="/Kitchen">Cozinha</Link></li>
    </ul>
  </nav>
);

export default Nav;
