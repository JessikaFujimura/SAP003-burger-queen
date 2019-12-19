import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  button: {
    width: '90px',
    height: '50px',
    alignSelf: 'center',
    margin: '2%',
    color: '#420029',
    border: '3px solid #420029',
  },
});

function Button({ id, handleClick, name }) {
  return (
    <button type="button" id={id} className={css(styles.button)} onClick={handleClick}>{name}</button>);
}

export default Button;
