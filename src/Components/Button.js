import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  button: {
    width: 'auto',
    height: 'auto',
    alignSelf: 'center',
    color: '#BF3904',
    border: '2px solid #BF3904',
    borderRadius: '10px',
    fontSize: '1rem',
    padding: '1.5vh',
    cursor: 'pointer',
    margin: '1%',
    ':focus': {
      backgroundColor: '#420029',
      color: 'white',
    },
    '@media (min-width: 768px)': {
      border: '3px solid #BF3904',
      borderRadius: '15px',
      fontSize: '1.2rem',
    },
  },
});

function Button({ id, handleClick, name }) {
  return (
    <button
      type="button"
      id={id}
      className={css(styles.button)}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Button;
