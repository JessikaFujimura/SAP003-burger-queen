/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import Order from '../Components/Order';
import firebase from '../utils/firebase';

const Delivery = () => {
  const [order, setOrder] = useState([]);
  const [ready, setReady] = useState([]);

  useEffect(() => {
    firebase.firestore().collection('orders').where('status', '==', 'pronto').get()
      .then((snap) => {
        snap.forEach((doc) => (
          setReady((currency) => [...currency, { ...doc.data(), id: doc.id }])));
      });
  }, []);

  function Ready(item) {
    firebase.firestore().collection('orders').doc(item.id).update({
      status: 'pronto',
    });
    item.status = 'pronto';
    setOrder(order.filter((i) => i.status === 'em preparação'));
  }


  return (
    <div>
      <section>
        <h4>Pedidos prontos</h4>
        {ready.map((i) => (<Order client={i.client} table={i.table} orderClient={i.order} date={i.date} time={i.time} nameBtn="Entregue" handleClick={() => Ready(i)} />
        ))}
      </section>
    </div>
  );
};

export default Delivery;
