import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import Button from './Button';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#bf3904',
    margin: '10px',
    padding: '10px',
    borderRadius: '5px',
    width: '150px',
  },
  img: {
    width: '40%',
  },
  label: {
    display: 'block',
    listStyle: 'none',
  },
});

const Menu = ({
  id, item, value, icon, option, add, handleClick, optionChosen, addChosen,
}) => (
  <article className={css(styles.card)} key={id}>
    <p><strong>{item}</strong></p>
    <p>{value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
    <img className={css(styles.img)} src={icon} alt="icone" />
    {option ? (
      <form>
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
  </article>
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