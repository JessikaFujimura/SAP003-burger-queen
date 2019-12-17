import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Button from './Button';

const Card = (props) => {
  return (
    <div className={css(styles.card)} id={props.id}>
      <p>{props.item}   R${props.value},00</p>
      <Button onClick={props.action} name="Adicionar" />
    </div>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#bf3904',
    margin: '10px',
    padding: '10px',
    borderRadius: '5px',
    width: '200px',
  },
});

export default Card;
