import React from 'react';
import PropTypes from 'prop-types';

function Input({ id, label, type, value, text, name }) {
  return (
    <form>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} value={value} />
      {text}
    </form>
  );
}

Input.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
