import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../Image/Logo.png';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#E69800',
    maxHeight: '25vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
});

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={logo} alt="logo" />
      <p>Seu fast-food 24 Horas</p>
    </header>
  );
}

export default Header;
