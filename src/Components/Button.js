import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  button: {
    width: 'auto',
    height: 'auto',
    alignSelf: 'center',
    margin: '2%',
    color: '#420029',
    border: '3px solid #420029',
    borderRadius: '5%',
    fontSize: '120%',
    padding: '4%',
  },
});

function Button({ id, handleClick, name }) {
  return (
    <button type="button" id={id} className={css(styles.button)} onClick={handleClick}>{name}</button>);
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Button;
