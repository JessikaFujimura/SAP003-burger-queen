/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Button from '../Components/Button';
import { firestore } from '../utils/firebase';

const styles = StyleSheet.create({
  section: {
    backgroundImage: 'linear-gradient(#D3AA62, #BF3904)',
    boxSizing: 'border-box',
    margin: 'auto',
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
    firestore.collection('orders').get()
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
            <li className={css(styles.order)} key={i.id}>
              <span>
                <strong>Data: </strong>
                {i.date}
              </span>
              <span>
                <strong>Hora: </strong>
                {i.time}
              </span>
              <span>
                <strong>Tempo de preparo: </strong>
                {i.leadTime}
              </span>
              <span>
                <strong>Status: </strong>
                {i.status}
              </span>
              <span>
                <strong>Mesa: </strong>
                {i.table}
              </span>
              <span>
                <strong>Nome do cliente: </strong>
                {i.client}
              </span>
              <table>
                <tr>
                  <th>Quant.</th>
                  <th>Item</th>
                </tr>
                {i.order.map((n) => (
                  <tr>
                    <td>{n.quant}</td>
                    <td>{n.item}</td>
                  </tr>
                ))}
              </table>
              <Button handleClick={() => Delete(i)} name="Excluir" id={i.id} />
            </li>
          ))}
        </article>
      </section>
    </div>
  );
};

export default OrderDone;
