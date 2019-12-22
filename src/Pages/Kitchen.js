import React, { useState, useEffect } from 'react';
import Order from '../Components/Order';
import firebase from '../utils/firebase';

const Kitchen = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    firebase.firestore().collection('orders').where("status", "==", "em preparação").get()
      .then((snap) => {
        snap.forEach((doc) => (setOrder((currency) => [...currency, { ...doc.data(), id: doc.id }])));
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
      <h4>Pedidos</h4>
      {order.map((i) => (<Order client={i.client} table={i.table} orderClient={i.order} data={i.data} hora={i.hora} handleClick={() => Ready(i)} />
      ))}
    </div>
  );
};

export default Kitchen;
