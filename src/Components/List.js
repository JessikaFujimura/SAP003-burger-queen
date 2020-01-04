import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import Button from './Button';

const styles = StyleSheet.create({
  list: {
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    listStyle: 'none',
    width: '170px',
    height: '5%',
    margin: '5% auto 0',
    color: '#420029',
    border: '2px solid #420029',
    fontSize: '70%',
    '@media (min-width: 768px)': {
      fontSize: '1.2rem',
      border: '3px solid #420029',
      width: '90%',
    },
  },
  descrition: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    justifyContent: 'center',
    padding: '0 2%',
    margin: '0 auto 3%',
    borderBottom: '1px solid #420029',
  },
  p: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1% 3%',
  },
});

const List = ({
  key, quant, item, optionChosen, addChosen, value, removeClick, addClick,
}) => (
  <li key={key} className={css(styles.list)}>
    <p className={css(styles.descrition)}>
      <b>Produto:</b>
      <span>
        {item}
      </span>
      {optionChosen ? (
        <span>
          Tipo:
          {optionChosen}
        </span>
      ) : ''}
      {addChosen ? (
        <span>
          Adicional:
          {addChosen}
        </span>
      ) : ''}
    </p>
    <Button id="btn+" name="+" handleClick={addClick} />
    <p className={css(styles.p)}>
      <b>Quant.:</b>
      {quant}
    </p>
    <p className={css(styles.p)}>
      <b>Total:</b>
      {(quant * value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
    </p>
    <Button id="btnX" name="X" handleClick={removeClick} />
  </li>
);

List.propTypes = {
  key: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  quant: PropTypes.number.isRequired,
  optionChosen: PropTypes.string.isRequired,
  addChosen: PropTypes.string.isRequired,
  removeClick: PropTypes.func.isRequired,
  addClick: PropTypes.func.isRequired,
};

export default List;
