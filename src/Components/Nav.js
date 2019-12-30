import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

const styles = StyleSheet.create({
  nav: {
    '@media (min-width: 768px) and (max-width: 991px)': {
      display: 'flex',
      flexDirection: 'row',
      listStyle: 'none',
      textDecoration: 'none',
      fontSize: '150%',
      justifyContent: 'space-around',
      backgroundColor: '#BF3904',
      padding: '10px',
      margin: '0',
      fontFamily: 'Inria Serif, serif',
      fontWeight: 'bolder',
    },
  },
});

const Nav = () => (
  <nav>
    <ul className={css(styles.nav)}>
      <li><Link className={css(styles.nav)} to="/Waiter">Garçon</Link></li>
      <li><Link className={css(styles.nav)} to="/Kitchen">Cozinha</Link></li>
    </ul>
  </nav>
);

export default Nav;
