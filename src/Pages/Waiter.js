import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Route, Link } from 'react-router-dom';
import MakeOrder from './MakeOrder';
import Delivery from './Delivery';

const styles = StyleSheet.create({
  divmain: {
    display: 'block',
    textAlign: 'center',
  },
  button: {
    width: '20%',
    height: '5em',
    color: '#420029',
    border: '3px solid #420029',
    fontSize: '130%',
    padding: '15px',
    margin: '5%',
  },
  text: {
    textDecoration: 'none',
  }
});

const Waiter = () => {


  return (
    <div className={css(styles.divmain)}>
      <Link className={css(styles.text)} to="/Waiter/Order"><button type="button" className={css(styles.button)}>Pedidos</button></Link>
      <Link className={css(styles.text)} to="/Waiter/Delivery"><button type="button" className={css(styles.button)}>Entregar</button></Link>
      <Route path="/Waiter/Order" component={MakeOrder} />
      <Route path="/Waiter/Delivery" component={Delivery} />
    </div>
  );
};


export default Waiter;
