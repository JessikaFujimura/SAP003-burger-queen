/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Order from '../Components/Order';
import firebase from '../utils/firebase';

const styles = StyleSheet.create({
  title: {
    color: '#E69901',
    fontSize: '150%',
  },
});


const Delivery = () => {
  const [ready, setReady] = useState([]);

  useEffect(() => {
    firebase.firestore().collection('orders').where('status', '==', 'pronto').get()
      .then((snap) => {
        snap.forEach((doc) => (
          setReady((currency) => [...currency, { ...doc.data(), id: doc.id }])));
      });
  }, []);

  function Delivered(item) {
    firebase.firestore().collection('orders').doc(item.id).update({
      status: 'entregue',
    });
    item.status = 'entregue';
    setReady(ready.filter((i) => i.status === 'pronto'));
  }


  return (
    <div>
      <section>
        <h4 className={css(styles.title)}>Pedidos prontos para entregar</h4>
        <article>
          {ready.map((i) => (<Order client={i.client} table={i.table} orderClient={i.order} date={i.date} time={i.time} nameBtn="Entregue" handleClick={() => Delivered(i)} />
          ))}
        </article>
      </section>
    </div>
  );
};

export default Delivery;
