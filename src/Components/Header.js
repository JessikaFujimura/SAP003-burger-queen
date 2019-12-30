import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../Image/LogoBlack.png';
import header from '../Image/Header.png';


const styles = StyleSheet.create({
  header: {
    backgroundImage: `url(${header})`,
    backgroundSize: 'cover',
    maxHeight: '30vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontFamily: 'Ma Shan Zheng, cursive',
    fontSize: '180%',
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
