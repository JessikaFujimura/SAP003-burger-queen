import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';
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
    padding: '3% 0 0',
  },
  text: {
    color: 'white',
    fontFamily: 'Ma Shan Zheng, cursive',
    fontSize: '180%',
  },
});

function Header() {
  return (
    <header className={css(styles.header)}>
      <Link to="/"><img src={logo} alt="logo" /></Link>
      <p className={css(styles.text)}>Seu fast-food 24 Horas</p>
    </header>
  );
}

export default Header;
