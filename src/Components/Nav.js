import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

const styles = StyleSheet.create({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    justifyContent: 'space-around',
    backgroundColor: '#E7D7A5',
    padding: '20px',
    margin: '0',
    borderTop: '10px double #5B2D1F',
    borderBottom: '2px dotted #5B2D1F',
  },
  link: {
    fontSize: '2.5rem',
    border: '2px solid #5B2D1F',
    borderTopLeftRadius: '150px',
    borderTopRightRadius: '150px',
    textDecoration: 'none',
    fontWeight: 'bolder',
    padding: '10px 100px',
    color: '#5B2D1F',
    backgroundImage: 'linear-gradient(#BF3904, #D3AA62)',
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
