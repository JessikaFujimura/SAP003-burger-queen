import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import Button from './Button';

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
    width: '80%',
    height: '5%',
    margin: '1% auto',
    boxSizing: 'border-box',
    color: '#420029',
    border: '3px solid #420029',
  },
});

const List = ({
  key, quant, item, option, addition, value, handleClick,
}) => {
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

List.propTypes = {
  key: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  quant: PropTypes.number.isRequired,
  option: PropTypes.arrayOf.isRequired,
  addition: PropTypes.arrayOf.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default List;
