import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Nav = () => {
  return (
    <nav>
      <ul className={css(styles.nav)}>
        <li>Pedido</li>
        <li>Cozinha</li>
      </ul>
    </nav>
  );
};

const styles = StyleSheet.create({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    justifyContent: 'space-around',
    backgroundColor: '#BF3904',
  },
});


export default Nav;
