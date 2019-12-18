import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Button(props) {
  return (
    <button type="button" id={props.id} className={css(styles.button)} onClick={props.handleClick}>{props.name}</button>);
}

const styles = StyleSheet.create({
  button: {
    width: '10em',
    height: '5em',
    alignSelf: 'center',
    margin: '2%',
    color: '#420029',
    border: '3px solid #420029',
  },
});


export default Button;
