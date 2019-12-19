import React from 'react';
import { StyleSheet, css } from 'aphrodite';
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
});

const Card = (props) => {
  return (
    <div className={css(styles.card)} key={props.id}>
      <p>{props.item}</p>
      <p>{props.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
      <img className={css(styles.img)} src={props.icon} alt="icone" />
      <div>
        {props.option ? <form><p>Opções de hambúrguer:</p>
            {props.option.map((i, index)=> <label><input id={index} type='radio' value={i} name='option'/>{i}</label>)}</form>
        : ''}
      </div>
      <p>
        {
          props.add ?
          <form>
            <p>Adicionais:</p>
            {props.add.map((i)=> <label><input type="radio" value={i} name='addition'/>{i}</label>)}
          </form> : ''
        }
      </p>
      <Button handleClick={props.handleClick} name="Adicionar" />
    </div>
  );
};


export default Card;
