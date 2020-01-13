/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Order from '../../Components/Order';
import { firestore } from '../../utils/firebase';

const styles = StyleSheet.create({
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

const ReadyOrder = () => {
  const [ready, setReady] = useState([]);

  useEffect(() => {
    firestore.collection('orders').where('status', '==', 'pronto').orderBy('time', 'asc').get()
      .then((snap) => {
        snap.forEach((doc) => (
          setReady((currency) => [...currency, { ...doc.data(), id: doc.id }])));
      });
  }, []);

  function Archieve(i) {
    firestore.collection('orders').doc(i.id).update({
      status: 'entregue',
    }).then(
      i.status = 'entregue',
      setReady(ready.filter((item) => item.status === 'pronto')),
    );
  }

  return (
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
  );
};

export default ReadyOrder;
