import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../Image/LogoBlack.png';

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontFamily: 'Ma Shan Zheng, cursive',
    margin: '0 0 3%',
    fontSize: '1.2rem',
    '@media (min-width: 992px)': {
      fontSize: '1.8rem',
    },
  },
  img: {
    margin: 'auto',
    width: '15vw',
    '@media (min-width: 992px)': {
      width: '8vw',
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

Header.propTypes = {
  classname: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Header;
