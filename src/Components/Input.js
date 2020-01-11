import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  text: {
    alignSelf: 'start',
    fontSize: '1rem',
    '@media (min-width: 992px)': {
      fontSize: '1.4rem',
    },
  },
});

function Input({
  id, label, type, value, handleClick, classname, placeholder,
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
