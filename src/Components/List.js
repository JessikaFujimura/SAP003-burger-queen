import React from 'react';
import Button from './Button';


const List = (props) => {
  return (
    <div>
      <li>
        <span>{props.quant}</span>
        <span>{props.item}</span>
        <span>{props.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
        <Button name="X" handleClick={props.handleClick} />
      </li>
    </div>
  );
};

export default List;
