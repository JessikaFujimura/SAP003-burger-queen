/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { useHistory, Link, Route } from 'react-router-dom';
import Header from '../Components/Header';
import Nav from '../Components/Nav';
import header from '../Image/Header.png';
import { auth } from '../utils/firebase';
import OrderInProduction from './OrderInProduction';
import ReadyOrder from './ReadyOrder';
import OrderHistory from './OrderHistory';

const styles = StyleSheet.create({
  header: {
    backgroundImage: `url(${header})`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    maxHeight: '13vw',
    padding: '3% 0 0',
    '@media (min-width: 992px)': {
      maxHeight: '7vw',
      backgroundSize: '50%',
    },
  },
  section: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    top: '-2.5vw',
    left: '18vw',
    '@media (min-width: 992px)': {
      top: '-2.5vw',
      left: '10vw',
    },
  },
  link: {
    boxSizing: 'border-box',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bolder',
    fontSize: '0.85rem',
    width: '15vw',
    height: '15vw',
    color: 'white',
    borderRadius: '50%',
    border: '1.5vw solid #8D0A0A',
    padding: '10px',
    margin: '3vw 1vw',
    cursor: 'pointer',
    backgroundColor: '#BF3904',
    ':focus': {
      backgroundColor: '#420029',
      boxShadow: '0px 10px 30px 10px #420029',
      transform: 'rotate(360deg)',
      transition: '1s',
    },
    '@media (min-width: 992px)': {
      width: '9vw',
      height: '9vw',
      fontSize: '1.1rem',
      border: '1vw solid #8D0A0A',
    },
  },
});

const Kitchen = () => {
  const [userName, setUserName] = useState('');
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(() => {
      if (auth.currentUser) {
        setUserName(auth.currentUser.displayName);
      }
    });
  }, []);


  return (
    <main>
      <Header
        classname={css(styles.header)}
        text=""
        link="/Kitchen"
      />
      <Nav
        user={userName}
        handleClick={() => {
          auth.signOut().then(
            history.push('/'),
          );
        }}
      />
      <section className={css(styles.section)}>
        <Link className={css(styles.link)} to="/Kitchen/OrderInProduction">
          Pedidos em produção
        </Link>
        <Link className={css(styles.link)} to="/Kitchen/ReadyOrder">
          Pedidos Prontos
        </Link>
        <Link className={css(styles.link)} to="/Kitchen/OrderHistory">
          Histórico de Pedidos
        </Link>
      </section>
      <Route path="/Kitchen/OrderInProduction" component={OrderInProduction} />
      <Route path="/Kitchen/ReadyOrder" component={ReadyOrder} />
      <Route path="/Kitchen/OrderHistory" component={OrderHistory} />
    </main>
  );
};

export default Kitchen;
