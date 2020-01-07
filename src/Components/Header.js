import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';
import logo from '../Image/LogoBlack.png';
import header from '../Image/Header.png';

const styles = StyleSheet.create({
  header: {
    backgroundImage: `url(${header})`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '30vh',
    padding: '3% 0 0',
    '@media (min-width: 992px)': {
      backgroundSize: '50%',
    },
  },
  text: {
    color: 'white',
    fontFamily: 'Ma Shan Zheng, cursive',
    margin: '0 0 3%',
    fontSize: '1.8rem',
  },
  img: {
    margin: 'auto',
    width: '15vh',
    '@media (min-width: 992px)': {
      width: '25vh',
    },
  },
});

function Header() {
  return (
    <header className={css(styles.header)}>
      <Link to="/"><img className={css(styles.img)} src={logo} alt="logo" /></Link>
      <p className={css(styles.text)}>Seu fast-food 24 Horas</p>
    </header>
  );
}

export default Header;
