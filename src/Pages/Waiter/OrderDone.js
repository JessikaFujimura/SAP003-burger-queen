/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { firestore } from '../../utils/firebase';
import Order from '../../Components/Order';

const styles = StyleSheet.create({
  section: {
    backgroundImage: 'linear-gradient(#D3AA62, #BF3904)',
    boxSizing: 'border-box',
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
  title: {
    textAlign: 'center',
    color: '#8D0A0A',
    fontSize: '1.8rem',
    fontWeight: 'bolder',
  },
  order: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#DCCEAF',
    width: '23vw',
    border: '5px double #8D0A0A',
  },
});

const OrderDone = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    firestore.collection('orders').orderBy('time', 'desc').get()
      .then((snap) => {
        snap.forEach((doc) => (
          setOrder((currency) => [...currency, { ...doc.data(), id: doc.id }])));
      });
  }, []);

  function Delete(item) {
    firestore.collection('orders').doc(item.id).delete();
    order.splice(order.indexOf(item), 1);
    setOrder([...order]);
  }


  return (
    <div>
      <section className={css(styles.section)}>
        <h4 className={css(styles.title)}>Todos os pedidos</h4>
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
              status={i.status}
              nameBtn="Excluir"
              handleClick={() => Delete(i)}
            />
          ))}
        </article>
      </section>
    </div>
  );
};

export default OrderDone;
