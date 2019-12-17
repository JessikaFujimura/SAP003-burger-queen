import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Button(props) {
  return <button type="button" id={props.id} className={css(styles.button)} onClick={props.onClick}>{props.name}</button>;
}

const styles = StyleSheet.create({
  button: {
    width: 'auto',
    alignSelf: 'center',
    margin: '2%',
  },
});


export default Button;
