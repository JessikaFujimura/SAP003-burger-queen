import React from 'react';
import logo from '../Image/Logo.png';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#E69800',
    minHeight: '30vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
});

const Header = () => {
  return (
    <header className={css(styles.header)}>
      <img src={logo} alt="logo" />
      <p>Seu fast-food 24 Horas</p>
    </header>
  );
};

export default Header;
