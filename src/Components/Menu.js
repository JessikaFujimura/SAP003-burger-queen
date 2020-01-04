import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import Button from './Button';

const styles = StyleSheet.create({
  card: {
    boxSizing: 'border-box',
    backgroundColor: '#D3AA62',
    margin: '2%',
    padding: '3%',
    borderRadius: '3vh',
    width: '45%',
    listStyle: 'none',
  },
  img: {
    width: '40%',
  },
  label: {
    display: 'block',
    listStyle: 'none',
  },
  radio: {
    fontSize: '15rem',
    userSelect: 'none',
    cursor: 'pointer',
  },
});

const Menu = ({
  id, item, value, icon, option, add, handleClick, optionChosen, addChosen,
}) => (
  <li className={css(styles.card)} key={id}>
    <img className={css(styles.img)} src={icon} alt="icone" />
    <h1>{item}</h1>
    <p>{value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
    {option ? (
      <form>
        <hr />
        <p>
          Opções de hambúrguer:
        </p>
        {
          option.map((i, index) => (
            <label htmlFor={index} className={css(styles.label)}>
              <input onChange={(e) => optionChosen(e.target.value)} className={css(styles.radio)} id={index} type="radio" value={i} name="option" />
              {i}
            </label>
          ))
        }
      </form>
    )
      : ''}
    {
      add ? (
        <form>
          <hr />
          <p>
            Adicionais:
          </p>
          {
            add.map((i) => (
              <label className={css(styles.label)}>
                <input className={css(styles.radio)} onChange={(e) => addChosen(e.target.value)} type="radio" value={i} name="addition" />
                {i}
              </label>
            ))
          }
        </form>
      ) : ''
    }
    <Button handleClick={handleClick} name="Adicionar" />
  </li>
);


Menu.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  optionChosen: PropTypes.string.isRequired,
  addChosen: PropTypes.string.isRequired,
  add: PropTypes.arrayOf.isRequired,
  option: PropTypes.arrayOf.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Menu;
