import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import Button from './Button';

const styles = StyleSheet.create({
  nav: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: '10',
  },
});

const Nav = ({
  user, handleClick,
}) => (
  <nav className={css(styles.nav)}>
    <p>{user}</p>
    <Button
      name="Log out"
      id="btnLogOut"
      handleClick={handleClick}
      classname={css(styles.button)}
    />
  </nav>
);

Nav.propTypes = {
  user: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Nav;
