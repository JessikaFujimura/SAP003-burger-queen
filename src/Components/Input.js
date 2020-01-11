import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  input: {
    width: '50vw',
    height: 'auto',
    boxSizing: 'border-box',
    alignSelf: 'center',
    color: '#420029',
    border: '1px solid #586B9F',
    borderRadius: '15px 0',
    margin: '0 0 3%',
    padding: '2%',
    fontSize: '1.2rem',
    '@media (min-width: 992px)': {
      width: '40vw',
    },
  },
  text: {
    alignSelf: 'start',
    fontSize: '1.4rem',
  },
});

function Input({
  id, label, type, value, handleClick, classname,placeholder,
}) {
  return (
    <label className={css(styles.text)} htmlFor={id}>
      {label}
      <input
        placeholder={placeholder}
        className={classname}
        type={type}
        id={id}
        value={value}
        onChange={handleClick}
      />
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Input;
