/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { useHistory } from 'react-router-dom';
import Order from '../Components/Order';
import Header from '../Components/Header';
import Nav from '../Components/Nav';
import header from '../Image/Header.png';
import { firestore, auth } from '../utils/firebase';

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
    backgroundImage: 'linear-gradient(#D3AA62, #BF3904)',
    boxSizing: 'border-box',
    margin: '3% auto',
    padding: '1%',
    borderRadius: '5px',
    width: '95vw',
  },
  article: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    textAlign: 'center',
    color: '#8D0A0A',
    fontSize: '1.8rem',
    fontWeight: 'bolder',
  },
});

const Kitchen = () => {
  const [order, setOrder] = useState([]);
  const [ready, setReady] = useState([]);
  const [historic, setHistoric] = useState([]);
  const [userName, setUserName] = useState('');
  const history = useHistory();

  useEffect(() => {
    firestore.collection('orders').where('status', '==', 'em preparação').get()
      .then((snap) => {
        snap.forEach((doc) => (
          setOrder((currency) => [...currency, { ...doc.data(), id: doc.id }])));
      });
    firestore.collection('orders').where('status', '==', 'pronto').get()
      .then((snap) => {
        snap.forEach((doc) => (
          setReady((currency) => [...currency, { ...doc.data(), id: doc.id }])));
      });
    firestore.collection('orders').where('status', '==', 'entregue').get()
      .then((snap) => {
        snap.forEach((doc) => (
          setHistoric((currency) => [...currency, { ...doc.data(), id: doc.id }])));
      });
    auth.onAuthStateChanged(() => {
      if (auth.currentUser) {
        setUserName(auth.currentUser.displayName);
      }
    });
  }, []);

  function Ready(item) {
    const timePast = ((new Date().getTime() / 1000) - item.time.seconds);
    const leadTime = `
      ${parseInt(timePast / 3600, 10)}h:
      ${parseInt(timePast / 60, 10) - parseInt(((timePast / 3600) * 60), 10)}m:
      ${parseInt(timePast % 60, 10)}s
      `;
    firestore.collection('orders').doc(item.id).update({
      status: 'pronto',
      leadTime,
    });
    item.leadTime = leadTime;
    item.status = 'pronto';
    setReady([...ready, item]);
    setOrder(order.filter((i) => i.status === 'em preparação'));
  }

  function Archieve(i) {
    firestore.collection('orders').doc(i.id).update({
      status: 'entregue',
    }).then(
      i.status = 'entregue',
      setHistoric([...historic, i]),
      setReady(order.filter((item) => item.status === 'pronto')),
    );
  }

  function Delete(i) {
    firestore.collection('orders').doc(i.id).delete();
    historic.splice(historic.indexOf(i), 1);
    setHistoric([...historic]);
  }

  return (
    <main>
      <Header classname={css(styles.header)} />
      <Nav
        user={userName}
        handleClick={() => {
          auth.signOut();
          history.push('/');
        }}
      />
      <section className={css(styles.section)}>
        <h4 className={css(styles.title)}>
          <span role="img" aria-label="Man Cook">👨‍🍳</span>
          Pedidos em produção
          <span role="img" aria-label="Man Cook">👨‍🍳</span>
        </h4>
        <article className={css(styles.article)}>
          {order.map((i) => (
            <Order
              id={i.id}
              client={i.client}
              table={i.table}
              orderClient={i.order}
              date={i.time.toDate().toLocaleString('pt-BR').split(' ')[0]}
              time={i.time.toDate().toLocaleString('pt-BR').split(' ')[1]}
              nameBtn="Pronto"
              status={i.status}
              handleClick={() => Ready(i)}
            />
          ))}
        </article>
      </section>
      <section className={css(styles.section)}>
        <h4 className={css(styles.title)}>
          <span role="img" aria-label="Fork and Knife With Plate">🍽️</span>
          Pedidos prontos
          <span role="img" aria-label="Fork and Knife With Plate">🍽️</span>
        </h4>
        <article className={css(styles.article)}>
          {ready.map((i) => (
            <Order
              client={i.client}
              table={i.table}
              orderClient={i.order}
              date={i.time.toDate().toLocaleString('pt-BR').split(' ')[0]}
              time={i.time.toDate().toLocaleString('pt-BR').split(' ')[1]}
              leadTime={i.leadTime}
              nameBtn="Arquivar"
              status={i.status}
              handleClick={() => Archieve(i)}
            />
          ))}
        </article>
      </section>
      <section className={css(styles.section)}>
        <h4 className={css(styles.title)}>
          <span role="img" aria-label="scrool">📜</span>
            Histórico de pedidos
          <span role="img" aria-label="scrool">📜</span>
        </h4>
        <article className={css(styles.article)}>
          {historic.map((i) => (
            <Order
              client={i.client}
              table={i.table}
              orderClient={i.order}
              date={i.time[0]}
              time={i.time[1]}
              leadTime={i.leadTime}
              nameBtn="Deletar"
              status={i.status}
              handleClick={() => Delete(i)}
            />
          ))}
        </article>
      </section>
    </main>
  );
};

export default Kitchen;
