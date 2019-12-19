import React from 'react';
import Button from './Button';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
    width: '80%',
    height: '5%',
    margin: '1%',
    color: '#420029',
    border: '3px solid #420029',
  },
});

const List = ({key, quant, item, option, addition, value, handleClick}) => {
  return (
    <li key={key} className={css(styles.list)}>
      <h1>{quant}</h1>
      <p>{item}</p>
      <p>{option}</p>
      <p>{addition}</p>
      <p>
        {value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </p>
      <Button name="X" handleClick={handleClick} />
    </li>
  );
};

export default List;
