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

const OrderHistory = () => {
  const [historic, setHistoric] = useState([]);

  useEffect(() => {
    firestore.collection('orders').where('status', '==', 'entregue').orderBy('time', 'asc').get()
      .then((snap) => {
        snap.forEach((doc) => (
          setHistoric((currency) => [...currency, { ...doc.data(), id: doc.id }])));
      });
  }, []);


  function Delete(i) {
    firestore.collection('orders').doc(i.id).delete();
    historic.splice(historic.indexOf(i), 1);
    setHistoric([...historic]);
  }

  return (
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
            date={i.time.toDate().toLocaleString('pt-BR').split(' ')[0]}
            time={i.time.toDate().toLocaleString('pt-BR').split(' ')[1]}
            leadTime={i.leadTime}
            nameBtn="Deletar"
            status={i.status}
            handleClick={() => Delete(i)}
          />
        ))}
      </article>
    </section>
  );
};

export default OrderHistory;
