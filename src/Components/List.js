import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

const styles = StyleSheet.create({
  button: {
    width: 'auto',
    height: 'auto',
    alignSelf: 'center',
    color: '#BF3904',
    border: '3px solid #BF3904',
    borderRadius: '15px',
    fontSize: '1rem',
    padding: '1vh',
    cursor: 'pointer',
    margin: '0.5%',
    ':focus': {
      backgroundColor: '#420029',
      color: 'white',
    },
    '@media (min-width: 992px)': {
      padding: '3vh',
      ':hover': {
        backgroundColor: '#420029',
        color: 'white',
      },
    },
  },
  list: {
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    listStyle: 'none',
    width: '45vw',
    height: '5%',
    margin: '3% auto 0',
    color: '#420029',
    border: '2px solid #420029',
    fontSize: '1rem',
    '@media (min-width: 768px)': {
      fontSize: '1.2rem',
      border: '3px solid #420029',
      width: '43vw',
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
    margin: '1%  0',
  },
  line: {
    margin: '0 auto',
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: '0',
    width: '100%',
  },
});

function List({
  quant,
  item,
  optionChosen,
  addChosen,
  value,
  deleteClick,
  removeClick,
  addClick,
}) {
  return (
    <li className={css(styles.list)}>
      <p className={css(styles.descrition)}>
        <b>
          {item}
        </b>
        {optionChosen ? (
          <p className={css(styles.line)}>
            <span>Opção: </span>
            <span>{optionChosen}</span>
          </p>
        ) : false}
        {addChosen ? (
          <p className={css(styles.line)}>
            <span>Adicional: </span>
            <span>{addChosen}</span>
          </p>
        ) : false}
      </p>
      <div className={css(styles.info)}>
        <Button
          id="btn+"
          name="+"
          handleClick={addClick}
          classname={css(styles.button)}
        />
        <p className={css(styles.p)}>
          <b>Quant.:</b>
          {quant}
        </p>
        <Button
          id="btn-"
          name="-"
          handleClick={removeClick}
          classname={css(styles.button)}
        />
        <p className={css(styles.p)}>
          <b>Total:</b>
          {(quant * value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </p>
        <Button
          id="btnX"
          name={<FontAwesomeIcon icon={faTrashAlt} />}
          handleClick={deleteClick}
          classname={css(styles.button)}
        />
      </div>
    </li>
  );
}

List.propTypes = {
  item: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  quant: PropTypes.number.isRequired,
  optionChosen: PropTypes.string.isRequired,
  addChosen: PropTypes.string.isRequired,
  removeClick: PropTypes.func.isRequired,
  deleteClick: PropTypes.func.isRequired,
  addClick: PropTypes.func.isRequired,
};

export default List;
