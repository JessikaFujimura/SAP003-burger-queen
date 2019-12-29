/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Button from '../Components/Button';
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
  },
  title: {
    color: '#E69901',
    fontSize: '150%',
  },
});

const OrderDone = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    firebase.firestore().collection('orders').get()
      .then((snap) => {
        snap.forEach((doc) => (
          setOrder((currency) => [...currency, { ...doc.data(), id: doc.id }])));
      });
  }, []);

  function Delete(item) {
    firebase.firestore().collection('orders').doc(item.id).delete();
  }
  function Edit(item) {
    firebase.firestore().collection('orders').doc(item.id).update();
  }


  return (
    <div>
      <section className={css(styles.section)}>
        <h4 className={css(styles.title)}>Todos os pedidos</h4>
        <article className={css(styles.article)}>
          {order.map((i) => (
            <li key={i.id}>
              <p>
                <strong>Data: </strong>
                {i.date}
              </p>
              <p>
                <strong>Hora: </strong>
                {i.time}
              </p>
              <p>
                <strong>Tempo de preparo: </strong>
                {i.leadTime}
              </p>
              <p>
                <strong>Mesa: </strong>
                {i.table}
              </p>
              <p>
                <strong>Nome do cliente: </strong>
                {i.client}
              </p>
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
              <Button handleClick={() => Edit(i)} name="Editar" />
              <Button handleClick={() => Delete(i)} name="Excluir" />
            </li>
          ))}
        </article>
      </section>
    </div>
  );
};

export default OrderDone;
