import React from 'react';

function Input(props) {
  return (
    <form>
      <label>{props.label}</label>
      <input type="text" id={props.id}></input>
    </form>
  );
}

export default Input;
