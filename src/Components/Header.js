import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';
import logo from '../Image/LogoBlack.png';


const styles = StyleSheet.create({
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

function Header({ classname, text }) {
  return (
    <header className={classname}>
      <Link to="/"><img className={css(styles.img)} src={logo} alt="logo" /></Link>
      <p className={css(styles.text)}>{text}</p>
    </header>
  );
}

export default Header;
