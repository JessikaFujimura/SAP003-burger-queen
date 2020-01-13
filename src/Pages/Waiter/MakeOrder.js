/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Swal from 'sweetalert2';
import firebase from 'firebase/app';
import { firestore } from '../../utils/firebase';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Menu from '../../Components/Menu';
import List from '../../Components/List';

const styles = StyleSheet.create({
  button: {
    width: 'auto',
    height: 'auto',
    alignSelf: 'center',
    color: '#BF3904',
    border: '3px solid #BF3904',
    borderRadius: '15px',
    fontSize: '1.2rem',
    padding: '1.5vh',
    cursor: 'pointer',
    margin: '1%',
    ':focus': {
      backgroundColor: '#420029',
      color: 'white',
    },
    '@media (min-width: 992px)': {
      padding: '3vh',
      ':hover': {
        backgroundColor: '#420029',
        color: 'white',
      },
    },
  },
  input: {
    width: '40vw',
    height: 'auto',
    boxSizing: 'border-box',
    alignSelf: 'center',
    color: '#420029',
    border: '1px solid #586B9F',
    borderRadius: '15px 0',
    margin: '0 0 3%',
    padding: '2%',
    fontSize: '1.2rem',
    '@media (min-width: 992px)': {
      width: '40vw',
      ':hover': {
        backgroundColor: '#420029',
        color: 'white',
      },
    },
  },
  main: {
    display: 'flex',
    textAlign: 'center',
  },
  menu: {
    width: '50vw',
    border: '2px solid #586B9F',
    borderRadius: '7vh',
    padding: '3vh 0 8vh',
    boxSizing: 'border-box',
    backgroundColor: '#F1F1F1',
    margin: '3vw 0 3vw 1%',
  },
  commands: {
    boxSizing: 'border-box',
    width: '50vw',
    border: '2px solid #586B9F',
    borderRadius: '7vh',
    padding: '3vh 0 8vh',
    backgroundColor: '#F1F1F1',
    margin: '3vw 1% 3vw 0',
  },
  commandsList: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: '0',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: '5%',
  },
  menuItem: {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap',
  },
  title: {
    fontSize: '2rem',
    fontFamily: 'Merienda, cursive',
    fontWeight: 'bolder',
    margin: '5%',
  },
  total: {
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: '1.5em',
    backgroundColor: '#BF3904',
    margin: '7% 0',
  },
});

const MakeOrder = () => {
  const [menu, setMenu] = useState([]);
  const [menufilter, setmenufilter] = useState([]);
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');
  const [order, setOrder] = useState([]);
  const [optionChosen, setOptionChosen] = useState('bovino');
  const [addChosen, setAddChosen] = useState('nenhum');

  useEffect(() => {
    firestore.collection('menu').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => setMenu((current) => [...current, doc.data()]));
      });
  }, []);

  function newOrder() {
    if (!client) {
      Swal.fire({
        text: 'Prencha o campo de "nome do cliente"',
        icon: 'warning',
      });
    } else if (!table) {
      Swal.fire({
        text: 'Prencha o campo de "número da mesa"',
        icon: 'warning',
      });
    } else {
      firestore.collection('orders').add({
        time: firebase.firestore.FieldValue.serverTimestamp(),
        leadTime: '-',
        client,
        table,
        order,
        status: 'em preparação',
      }).then(
        (docRef) => firestore.collection('orders')
          .doc(docRef.id)
          .update({ id: docRef.id }),
        setClient(''),
        setTable(''),
        setOrder([]),
        Swal.fire({
          text: 'Pedido enviado com sucesso!',
          icon: 'success',
        }),
      );
    }
  }

  function showMenu(e) {
    const menuType = e.target.id;
    setmenufilter(menu.filter((i) => i.menu === menuType));
  }

  function btnAddItem(item) {
    item.quant += 1;
    item.total = item.quant * item.value;
    setOrder([...order]);
  }

  function addItem(item) {
    const index = order.findIndex((i) => (
      i.id === item.id));
    if (index === -1) {
      item.quant = 1;
      item.total = item.quant * item.value;
      setOrder([...order, item]);
      if (item.option || item.add) {
        item.optionChosen = optionChosen;
        item.addChosen = addChosen;
        setOrder([...order, {
          ...item,
          value: item.addChosen === 'nenhum' ? item.value : item.value + 1,
          total: addChosen === 'nenhum' ? item.quant * item.value : item.quant * item.value + 1,
        }]);
      }
    } else if (item.optionChosen || item.addChosen) {
      const indexItem = order.findIndex((i) => (i.optionChosen === optionChosen
        && i.addChosen === addChosen && i.id === item.id
      ));
      if (indexItem >= 0) {
        btnAddItem(order[indexItem]);
      } else {
        const quant = 1;
        const total = addChosen === 'nenhum'
          ? item.quant * item.value
          : (item.quant * item.value) + 1;
        const value = addChosen === 'nenhum'
          ? item.value : item.value + 1;
        setOrder([...order, {
          ...item, optionChosen, addChosen, value, quant, total,
        }]);
      }
    } else {
      btnAddItem(order[index]);
    }
  }


  function btnReduceItem(item) {
    if (item.quant > 1) {
      item.quant -= 1;
      item.total = item.quant * item.value;
      setOrder([...order]);
    } else {
      item.quant = 1;
    }
  }

  function deleteItem(item) {
    order.splice(order.indexOf(item), 1);
    setOrder([...order]);
  }

  return (
    <main className={css(styles.main)}>
      <section className={css(styles.menu)}>
        <h4 className={css(styles.title)}>Menu</h4>
        <Button
          name="Café da manhã"
          id="breakfast"
          handleClick={(e) => showMenu(e)}
          classname={css(styles.button)}
        />
        <Button
          name="Restante do dia"
          id="lunch"
          handleClick={(e) => showMenu(e)}
          classname={css(styles.button)}
        />
        <article className={css(styles.menuItem)}>
          {menufilter.map((i, index) => (
            <Menu
              key={index}
              {...i}
              handleClick={() => addItem(i)}
              optionChosen={setOptionChosen}
              addChosen={setAddChosen}
            />
          ))}
        </article>
      </section>
      <section className={css(styles.commands)}>
        <h4 className={css(styles.title)}>Pedido</h4>
        <form className={css(styles.form)}>
          <Input
            classname={css(styles.input)}
            label="Nome do cliente"
            id="inputName"
            value={client}
            type="text"
            handleClick={(e) => setClient(e.currentTarget.value)}
          />
          <Input
            classname={css(styles.input)}
            label="Nº da mesa"
            id="inputTable"
            value={table}
            type="text"
            handleClick={(e) => setTable(e.currentTarget.value)}
          />
        </form>
        <article className={css(styles.commandsList)}>
          {order.map((i, index) => (
            <List
              key={index}
              {...i}
              removeClick={() => btnReduceItem(i)}
              addClick={() => btnAddItem(i)}
              deleteClick={() => deleteItem(i)}
            />
          ))}
        </article>
        <div className={css(styles.total)}>
          <p>Total </p>
          <p>{order.reduce(((sumTotal, i) => sumTotal + i.total), 0).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
        </div>
        <Button
          name="Finalizar Pedido"
          id="btnFinishOrder"
          handleClick={() => newOrder()}
          classname={css(styles.button)}
        />
      </section>
    </main>
  );
};


export default MakeOrder;
