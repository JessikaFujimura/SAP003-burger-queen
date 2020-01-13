import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

const styles = StyleSheet.create({
  section: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '80vh',
    textAlign: 'center',
  },
});

const Denied = () => (
  <section className={css(styles.section)}>
    <h1>HTTP Error 401</h1>
    <h3>Authorization Required</h3>
    <p>
      Você não tem autorização para acessar esta página!
    </p>
    <p>
      Para acessar está página é preciso fazer
      <strong><Link to="/">Login!</Link></strong>
    </p>
  </section>
);

export default Denied;
