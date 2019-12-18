import React from 'react';

function Input(props) {
  return (
    <form>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} id={props.id}></input>
    </form>
  );
}

export default Input;
