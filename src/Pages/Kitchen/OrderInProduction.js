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

const OrderInProduction = () => {
  const [order, setOrder] = useState([]);
  const [ready, setReady] = useState([]);

  useEffect(() => {
    firestore.collection('orders').where('status', '==', 'em preparação').orderBy('time', 'asc').get()
      .then((snap) => {
        snap.forEach((doc) => (
          setOrder((currency) => [...currency, { ...doc.data(), id: doc.id }])));
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


  return (
    <section className={css(styles.section)}>
      <h4 className={css(styles.title)}>
        <span role="img" aria-label="Man Cook">👨‍🍳 </span>
        Pedidos em produção
        <span role="img" aria-label="Man Cook"> 👨‍🍳</span>
      </h4>
      <article className={css(styles.article)}>
        {order.map((i) => (
          <Order
            id={i.id}
            client={i.client}
            table={i.table}
            orderClient={i.order}
            leadTime={i.leadTime}
            date={i.time.toDate().toLocaleString('pt-BR').split(' ')[0]}
            time={i.time.toDate().toLocaleString('pt-BR').split(' ')[1]}
            nameBtn="Pronto"
            status={i.status}
            handleClick={() => Ready(i)}
          />
        ))}
      </article>
    </section>
  );
};

export default OrderInProduction;
