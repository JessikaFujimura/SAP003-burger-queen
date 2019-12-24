import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import Button from './Button';

const styles = StyleSheet.create({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  box: {
    backgroundColor: 'white',
    width: 'auto',
    height: 'auto',
    boxSizing: 'border-box',
    padding: '5%',
  },
});

const Modal = ({
  show, handleClick, nameBtn, text,
}) => {
  if (show === 'false') {
    return null;
  }
  return (
    <section className={css(styles.modal)}>
      <article className={css(styles.box)}>
        <p>{text}</p>
        <Button handleClick={handleClick} name={nameBtn} />
      </article>
    </section>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  nameBtn: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Modal;
