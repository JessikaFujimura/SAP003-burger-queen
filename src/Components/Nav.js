import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

const styles = StyleSheet.create({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    textDecoration: 'none',
    fontSize: '150%',
    justifyContent: 'space-around',
    backgroundColor: '#BF3904',
    padding: '10px',
  },
});

const Nav = () => {
  return (
    <nav>
      <ul className={css(styles.nav)}>
        <li><Link to="/Waiter">Garçon</Link></li>
        <li><Link to="/Kitchen">Cozinha</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
