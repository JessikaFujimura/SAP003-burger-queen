/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { firestore } from '../utils/firebase';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Menu from '../Components/Menu';
import List from '../Components/List';
import Modal from '../Components/Modal';

const styles = StyleSheet.create({
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
    margin: '2% 0 2% 1%',
  },
  commands: {
    boxSizing: 'border-box',
    width: '50vw',
    border: '2px solid #586B9F',
    borderRadius: '7vh',
    padding: '3vh 0 8vh',
    backgroundColor: '#F1F1F1',
    margin: '2% 1% 2% 0',
  },
  commandsList: {
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
    fontSize: '3rem',
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
  modal: {
    position: 'absolute',
    filter: 'blur(0)',
    background: 'white',
  },
});

const MakeOrder = () => {
  const [menu, setMenu] = useState([]);
  const [menufilter, setmenufilter] = useState([]);
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');
  const [order, setOrder] = useState([]);
  const [show, setShow] = useState(false);
  const [optionChosen, setOptionChosen] = useState('');
  const [addChosen, setAddChosen] = useState('');

  useEffect(() => {
    firestore.collection('menu').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => setMenu((current) => [...current, doc.data()]));
      });
  }, []);

  function newOrder() {
    const currentDate = new Date();
    const date = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    const time = `${currentDate.getHours()}h:${currentDate.getMinutes()}m:${currentDate.getSeconds()}s`;
    if (!client) {
      setShow(true);
    } else if (!table) {
      setShow(true);
    } else {
      firestore.collection('orders').add({
        date,
        time,
        clock: currentDate.getTime(),
        leadTime: '-',
        client,
        table,
        order,
        status: 'em preparação',
      }).then(
        (docRef) => firestore.collection('orders').doc(docRef.id).update({ id: docRef.id }),
        setClient(''),
        setTable(''),
        setOrder([]),
      );
    }
  }

  function showMenu(e) {
    const menuType = e.target.id;
    setmenufilter(menu.filter((i) => i.menu === menuType));
  }

  function addItem(item) {
    if (order.some((i) => item.id === i.id)) {
      if (item.optionChosen || item.addChosen) {
        if (item.optionChosen.includes(optionChosen)) {
          item.quant += 1;
          item.total = item.quant * item.value;
          setOrder([...order]);
        } else {
          const quant = 1;
          const total = addChosen === 'nenhum' ? item.quant * item.value : (item.quant * item.value) + 1;
          const value = addChosen === 'nenhum' ? item.value : item.value + 1;
          setOrder([...order, {
            ...item, optionChosen, addChosen, value, quant, total,
          }]);
        }
      } else {
        item.quant += 1;
        item.total = item.quant * item.value;
        setOrder([...order]);
      }
    } else {
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
    }
    setAddChosen('');
    setOptionChosen('');
  }

  function btnAddItem(item) {
    item.quant += 1;
    item.total = item.quant * item.value;
    setOrder([...order]);
  }

  function deleteItem(item) {
    if (item.quant === 1) {
      order.splice(order.indexOf(item), 1);
      setOrder([...order]);
    } else {
      item.quant -= 1;
      item.total = item.quant * item.value;
      setOrder([...order]);
    }
  }

  return (
    <main className={css(styles.main)}>
      <Modal
        show={show}
        handleClick={() => setShow(false)}
        text="Preencha todos os campos"
        nameBtn="Fechar"
      />
      <section className={css(styles.menu)}>
        <h4 className={css(styles.title)}>Menu</h4>
        <Button
          name="Café da manhã"
          id="breakfast"
          handleClick={(e) => showMenu(e)}
        />
        <Button
          name="Restante do dia"
          id="lunch"
          handleClick={(e) => showMenu(e)}
        />
        <article className={css(styles.menuItem)}>
          {menufilter.map((i) => (
            <Menu
              id={i.id}
              item={i.item}
              icon={i.icon}
              value={i.value}
              option={i.option}
              add={i.add}
              handleClick={() => addItem(i)}
              optionChosen={setOptionChosen}
              addChosen={setAddChosen}
            />
          ))}
        </article>
      </section>
      <section className={css(styles.commands)}>
        <h4 className={css(styles.title)}>Pedido</h4>
        <Input
          label="Nome do cliente"
          id="inputName"
          value={client}
          type="text"
          handleClick={(e) => setClient(e.currentTarget.value)}
        />
        <Input
          label="Nº da mesa"
          id="inputTable"
          value={table}
          type="text"
          handleClick={(e) => setTable(e.currentTarget.value)}
        />
        <article className={css(styles.commandsList)}>
          {order.map((i) => (
            <List
              key={i.id}
              item={i.item}
              value={i.value}
              quant={i.quant}
              removeClick={() => deleteItem(i)}
              addClick={() => btnAddItem(i)}
              optionChosen={i.optionChosen}
              addChosen={i.addChosen}
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
        />
      </section>
    </main>
  );
};


export default MakeOrder;
