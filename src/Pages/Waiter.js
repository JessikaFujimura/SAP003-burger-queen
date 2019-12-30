import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Route, Link } from 'react-router-dom';
import MakeOrder from './MakeOrder';
import Delivery from './Delivery';
import OrderDone from './OrderDone';

const styles = StyleSheet.create({
  section: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  link: {
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bolder',
    fontSize: '130%',
    width: '150px',
    height: '150px',
    color: 'white',
    borderRadius: '50%',
    border: '5px inset #AD4B05',
    padding: '10px',
    margin: '5%',
    cursor: 'pointer',
    backgroundColor: '#E07100',
    ':hover': {
      backgroundColor: '#420029',
    },
  },
});

const Waiter = () => (
  <section>
    <article className={css(styles.section)}>
      <Link className={css(styles.link)} to="/Waiter/Order">
        Novo Pedido
      </Link>
      <Link className={css(styles.link)} to="/Waiter/OrderDone">
        Pedido Realizados
      </Link>
      <Link className={css(styles.link)} to="/Waiter/Delivery">
        Entregar Pedido
      </Link>
    </article>
    <Route path="/Waiter/Order" component={MakeOrder} />
    <Route path="/Waiter/Delivery" component={Delivery} />
    <Route path="/Waiter/OrderDone" component={OrderDone} />
  </section>
);


export default Waiter;
