import React, { useEffect, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Route, Link, useHistory } from 'react-router-dom';
import { auth } from '../utils/firebase';
import Header from '../Components/Header';
import Nav from '../Components/Nav';
import MakeOrder from './MakeOrder';
import Delivery from './Delivery';
import OrderDone from './OrderDone';
import header from '../Image/Header.png';

const styles = StyleSheet.create({
  header: {
    backgroundImage: `url(${header})`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '12vh',
    padding: '3% 0 0',
    '@media (min-width: 992px)': {
      backgroundSize: '50%',
    },
  },
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
    fontSize: '0.85rem',
    width: '8vh',
    height: '8vh',
    color: 'white',
    borderRadius: '50%',
    border: '10px ridge #AD4B05',
    padding: '10px',
    margin: '3vw 1vw',
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
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged(() => {
      if (auth.currentUser) {
        setUser(auth.currentUser.displayName);
      }
    });
  }, []);


  return (
    <main>
      <Header classname={css(styles.header)} />
      <Nav
        user={user}
        handleClick={() => {
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
