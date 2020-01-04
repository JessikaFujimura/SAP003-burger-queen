/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Order from '../Components/Order';
import firebase from '../utils/firebase';

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#420029',
    boxSizing: 'border-box',
    margin: '1%',
    padding: '1%',
    borderRadius: '5px',
    width: '98%',
  },
  article: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    color: '#E69901',
    fontSize: '150%',
  },
});

const Kitchen = () => {
  const [order, setOrder] = useState([]);
  const [ready, setReady] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    firebase.firestore().collection('orders').where('status', '==', 'em preparação').get()
      .then((snap) => {
        snap.forEach((doc) => (
          setOrder((currency) => [...currency, { ...doc.data(), id: doc.id }])));
      });
    firebase.firestore().collection('orders').where('status', '==', 'pronto').get()
      .then((snap) => {
        snap.forEach((doc) => (
          setReady((currency) => [...currency, { ...doc.data(), id: doc.id }])));
      });
    firebase.firestore().collection('orders').where('status', '==', 'entregue').get()
      .then((snap) => {
        snap.forEach((doc) => (
          setHistory((currency) => [...currency, { ...doc.data(), id: doc.id }])));
      });
  }, []);

  function Ready(item) {
    const timePast = (new Date().getTime() - item.clock) / 1000;
    const leadTime = `${parseInt(timePast / 3600, 10)}h:${parseInt(timePast / 60, 10)}m:${parseInt(timePast % 60, 10)}s`;
    firebase.firestore().collection('orders').doc(item.id).update({
      status: 'pronto',
      leadTime,
    });
    item.leadTime = leadTime;
    item.status = 'pronto';
    setReady([...ready, item]);
    setOrder(order.filter((i) => i.status === 'em preparação'));
  }

  function Archieve() {
  
  }

  function Delete(i) {
    firebase.firestore().collection('orders').doc(i.id).delete();
    history.splice(history.indexOf(i), 1);
    setHistory([...history]);
  }

  return (
    <div>
      <section className={css(styles.section)}>
        <h4 className={css(styles.title)}>Pedidos em produção</h4>
        <article className={css(styles.article)}>
          {order.map((i) => (
            <Order
              id={i.id}
              client={i.client}
              table={i.table}
              orderClient={i.order}
              date={i.date}
              nameBtn="Pronto"
              time={i.time}
              status={i.status}
              handleClick={() => Ready(i)}
            />
          ))}
        </article>
      </section>
      <section className={css(styles.section)}>
        <h4 className={css(styles.title)}>Pedidos prontos</h4>
        <article className={css(styles.article)}>
          {ready.map((i) => (
            <Order
              client={i.client}
              table={i.table}
              orderClient={i.order}
              date={i.date}
              time={i.time}
              leadTime={i.leadTime}
              nameBtn="Arquivar"
              status={i.status}
              handleClick={() => Archieve(i)}
            />
          ))}
        </article>
      </section>
      <section className={css(styles.section)}>
        <h4 className={css(styles.title)}>Histórico de pedidos</h4>
        <article className={css(styles.article)}>
          {history.map((i) => (
            <Order
              client={i.client}
              table={i.table}
              orderClient={i.order}
              date={i.date}
              time={i.time}
              leadTime={i.leadTime}
              nameBtn="Deletar"
              status={i.status}
              handleClick={() => Delete(i)}
            />
          ))}
        </article>
      </section>
    </div>
  );
};

export default Kitchen;
