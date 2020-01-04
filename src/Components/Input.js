import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 'auto',
    alignSelf: 'center',
    color: '#420029',
    border: '1px solid #586B9F',
    borderRadius: '15px 0',
    margin: '2%',
    padding: '3%',
    fontSize: '0.9rem',
    '@media (min-width: 768px)': {
      fontSize: '1.2rem',
    },
  },
  text: {
    alignSelf: 'center',
    fontSize: '0.9rem',
    '@media (min-width: 768px)': {
      fontSize: '1.4rem',
    },
  },
});

function Input({
  id, label, type, value, handleClick,
}) {
  return (
    <form>
      <label className={css(styles.text)} htmlFor={id}>
        {label}
      </label>
      <input
        className={css(styles.input)}
        type={type}
        id={id}
        value={value}
        onChange={handleClick}
      />
    </form>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Input;
