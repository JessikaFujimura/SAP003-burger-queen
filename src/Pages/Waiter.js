import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Route, Link, useHistory } from 'react-router-dom';
import { auth } from '../utils/firebase';
import Header from '../Components/Header';
import Nav from '../Components/Nav';
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
    width: '120px',
    height: '120px',
    color: 'white',
    borderRadius: '50%',
    border: '15px ridge #AD4B05',
    padding: '10px',
    margin: '5%',
    cursor: 'pointer',
    backgroundColor: '#E07100',
    ':focus': {
      backgroundColor: '#420029',
      boxShadow: '0px 10px 30px 10px #420029',
      transform: 'rotate(360deg)',
      transition: '1s',
    },
  },
});

const Waiter = () => {
  const history = useHistory();
  return (
    <main>
      <Header />
      <Nav handleClick={() => {
        auth.signOut();
        history.push('/');
      }}
      />
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
    </main>
  );
};


export default Waiter;
