import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import Select from 'react-select';
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

function Menu(
  {
    id, item, value, icon, option, add, handleClick, optionChosen, addChosen,
  },
) {
  const additional = add ? add.map((i) => { return { value: i, label: i }}) : [];
  const options = option ? option.map((i) => { return { value: i, label: i }}) : [];
  return (
    <li className={css(styles.card)} key={id} id>
      <img className={css(styles.img)} src={icon} alt="icone" />
      <h1>{item}</h1>
      <p>{value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
      {option ? (
        <p>
          Opções de hamburguer:
          <Select onChange={(opt) => optionChosen(opt.value)} options={options} />
        </p>
      )
        : []}
      {
        add ? (
          <p>
            Adicional:
            <Select onChange={(opt) => addChosen(opt.value)} options={additional} />
          </p>
        ) : []
      }
      <Button id={id} handleClick={handleClick} name="Adicionar" />
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


/*<form>
<hr />
<p>
  Adicionais:
</p>
{
  add.map((i) => (
    <label htmlFor={i} key={i} className={css(styles.label)}>
      <input className={css(styles.radio)} onChange={(e) => addChosen(e.target.value)} id={i} type="radio" value={i} name="addition" />
      {i}
    </label>
  ))
}
</form>*/