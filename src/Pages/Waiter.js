import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Route, Link } from 'react-router-dom';
import MakeOrder from './MakeOrder';
import Delivery from './Delivery';
import OrderDone from './OrderDone';

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
    cursor: 'pointer',
    ':hover': {
      color: '#FF2A016',
    },
  },
  text: {
    textDecoration: 'none',
  },
});

const Waiter = () => (
  <div className={css(styles.divmain)}>
    <Link className={css(styles.text)} to="/Waiter/Order"><button type="button" className={css(styles.button)}>Novo Pedido</button></Link>
    <Link className={css(styles.text)} to="/Waiter/OrderDone"><button type="button" className={css(styles.button)}>Pedido Realizados</button></Link>
    <Link className={css(styles.text)} to="/Waiter/Delivery"><button type="button" className={css(styles.button)}>Entregar Pedido</button></Link>
    <Route path="/Waiter/Order" component={MakeOrder} />
    <Route path="/Waiter/Delivery" component={Delivery} />
    <Route path="/Waiter/OrderDone" component={OrderDone} />
  </div>
);


export default Waiter;
