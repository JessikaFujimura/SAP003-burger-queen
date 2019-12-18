import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Button from './Button';

const Card = (props) => {
  return (
    <div className={css(styles.card)} id={props.id}>
      <p>{props.item}</p>
      <p>{props.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
      <p>Opções: {props.option.map((i)=> <button >{i}</button>)}</p>
      <p>Adicionais: {props.add.map((i)=> <button >{i}</button>)}</p>
      <Button handleClick={props.handleClick} name="Adicionar" />
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
