import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 'auto',
    alignSelf: 'center',
    margin: '2%',
    color: '#420029',
    border: '3px solid #420029',
    padding: '15px',
  },
  text: {
    alignSelf: 'center',
    fontSize: '120%',
    padding: '15px',
  },
});

function Input({
  id, label, type, value, text, name, handleClick,
}) {
  return (
    <form>
      <label className={css(styles.text)} htmlFor={id}>
        {label}
      </label>
      <input className={css(styles.input)} type={type} id={id} name={name} value={value} onChange={handleClick} />
      {text}
    </form>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Input;
