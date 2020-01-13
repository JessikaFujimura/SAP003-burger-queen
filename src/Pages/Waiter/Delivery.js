/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Order from '../../Components/Order';
import { firestore } from '../../utils/firebase';

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: '#8D0A0A',
    fontSize: '1.8rem',
    fontWeight: 'bolder',
  },
  section: {
    boxSizing: 'border-box',
    backgroundImage: 'linear-gradient(#D3AA62, #BF3904)',
    margin: '3vw auto',
    padding: '1%',
    borderRadius: '5px',
    width: '95vw',
  },
  article: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});


const Delivery = () => {
  const [ready, setReady] = useState([]);

  useEffect(() => {
    firestore.collection('orders').where('status', '==', 'pronto').get()
      .then((snap) => {
        snap.forEach((doc) => (
          setReady((currency) => [...currency, { ...doc.data(), id: doc.id }])));
      });
  }, []);

  function Delivered(item) {
    firestore.collection('orders').doc(item.id).update({
      status: 'entregue',
    });
    item.status = 'entregue';
    setReady(ready.filter((i) => i.status === 'pronto'));
  }


  return (
    <section className={css(styles.section)}>
      <h4 className={css(styles.title)}>Pedidos prontos para entregar</h4>
      <article className={css(styles.article)}>
        {ready.map((i) => (
          <Order
            id={i.id}
            client={i.client}
            table={i.table}
            orderClient={i.order}
            date={i.time.toDate().toLocaleString('pt-BR').split(' ')[0]}
            time={i.time.toDate().toLocaleString('pt-BR').split(' ')[1]}
            leadTime={i.leadTime}
            status={i.status}
            nameBtn="Entregue"
            handleClick={() => Delivered(i)}
          />
        ))}
      </article>
    </section>
  );
};

export default Delivery;
