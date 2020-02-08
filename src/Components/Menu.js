import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Button from './Button';

const styles = StyleSheet.create({
  button: {
    width: 'auto',
    height: 'auto',
    alignSelf: 'center',
    color: '#BF3904',
    border: '3px solid #BF3904',
    borderRadius: '15px',
    fontSize: '1.2rem',
    padding: '1vh',
    cursor: 'pointer',
    margin: '1%',
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
  card: {
    boxSizing: 'border-box',
    backgroundColor: '#D3AA62',
    margin: '0.5vw',
    padding: '1vw',
    borderRadius: '2vw',
    width: '22vw',
    listStyle: 'none',
  },
  img: {
    width: '30%',
  },
  label: {
    display: 'block',
    listStyle: 'none',
  },
  select: {
    fontSize: '0.8rem',
    '@media (min-width: 992px)': {
      fontSize: '1rem',
    },
  },
  title: {
    fontSize: '1rem',
    margin: '0',
    height: '5vh',
    '@media (min-width: 992px)': {
      height: 'auto',
    },
  },
  price: {
    margin: '0',
    '@media (min-width: 992px)': {
      margin: '0',
    },
  },
});

function Menu(
  {
    id, item, value, icon, option, add, handleClick, optionChosen, addChosen,
  },
) {
  const additional = add
    ? add.map((i) => ({ value: i, label: i })) : [];
  const options = option
    ? option.map((i) => ({ value: i, label: i })) : [];
  return (
    <li className={css(styles.card)} key={id} id>
      <img className={css(styles.img)} src={icon} alt="icone" />
      <h1 className={css(styles.title)}>{item}</h1>
      <p className={css(styles.price)}>
        {value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </p>
      {option ? (
        <p>
          Opções de hamburguer:
          <Select
            className={css(styles.select)}
            placeholder="Tipos de opções"
            onChange={(opt) => optionChosen(opt.value)}
            options={options}
          />
        </p>
      )
        : []}
      {
        add ? (
          <p>
            Adicional:
            <Select
              className={css(styles.select)}
              placeholder="Tipos de adicional"
              onChange={(opt) => addChosen(opt.value)}
              options={additional}
            />
          </p>
        ) : []
      }
      <Button
        id={id}
        handleClick={handleClick}
        name="Adicionar"
        classname={css(styles.button)}
      />
    </li>
  );
}


Menu.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  optionChosen: PropTypes.func.isRequired,
  addChosen: PropTypes.func.isRequired,
  add: PropTypes.arrayOf.isRequired,
  option: PropTypes.arrayOf.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Menu;
