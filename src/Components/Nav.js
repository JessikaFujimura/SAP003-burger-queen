import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

const styles = StyleSheet.create({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    textDecoration: 'none',
    fontSize: '130%',
    justifyContent: 'space-around',
    backgroundColor: '#BF3904',
    padding: '10px',
    margin: '0',
    fontWeight: 'bolder',
  },
});

const Nav = () => {
  return (
    <nav>
      <ul className={css(styles.nav)}>
        <li><Link className={css(styles.nav)} to="/Waiter">Garçon</Link></li>
        <li><Link className={css(styles.nav)} to="/Kitchen">Cozinha</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
