import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

const styles = StyleSheet.create({
  btnLogOut: {
    width: '12.5vw',
    height: 'auto',
    alignSelf: 'center',
    color: '#BF3904',
    border: '3px solid #BF3904',
    borderRadius: '10vw',
    fontSize: '1.2rem',
    padding: '0.5vw',
    cursor: 'pointer',
    ':focus': {
      backgroundColor: '#420029',
      color: 'white',
    },
    '@media (min-width: 992px)': {
      padding: '1.5vh',
      width: '10vw',
      ':hover': {
        backgroundColor: '#420029',
        color: 'white',
      },
    },
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '5px',
    right: '10px',
    zIndex: '10',
  },
  p: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    justifyContent: 'center',
  },
  icon: {
    fontSize: '3rem',
    borderRadius: '50%',
    backgroundColor: 'white',
  },

});

function Nav({
  user, handleClick,
}) {
  return (
    <nav className={css(styles.nav)}>
      <p className={css(styles.p)}>
        <FontAwesomeIcon
          icon={faUserCircle}
          className={css(styles.icon)}
        />
        <span>{user}</span>
      </p>
      <Button
        name="Log out"
        id="btnLogOut"
        handleClick={handleClick}
        classname={css(styles.btnLogOut)}
      />
    </nav>
  );
}

Nav.propTypes = {
  user: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Nav;
