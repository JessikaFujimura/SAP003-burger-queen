/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import firebase from '../utils/firebase';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Menu from '../Components/Menu';
import List from '../Components/List';

const styles = StyleSheet.create({
  divmain: {
    display: 'flex',
    textAlign: 'center',
  },
  menu: {
    width: '50vw',
  },
  commands: {
    width: '50vw',
    border: '1px solid #420029',
  },
  commandsList: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  menuItem: {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap',
  },
  title: {
    fontSize: '180%',
    fontWeight: 'bolder',
    margin: '5%',
  },
  total: {
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: '120%',
    backgroundColor: '#E69901',
    margin: '7% 0',
  },
});

const MakeOrder = () => {
  const [menu, setMenu] = useState([]);
  const [menufilter, setmenufilter] = useState([]);
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');
  const [order, setOrder] = useState([]);


  useEffect(() => {
    firebase.firestore().collection('menu').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => setMenu((current) => [...current, doc.data()]));
      });
  }, []);


  function infoClient() {
    const date = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
    const time = `${new Date().getHours()}h:${new Date().getMinutes()}m:${new Date().getSeconds()}s`;
    if (client === '' && table === '') {
      alert('Preencher todos os campos');
    } else if (order === []) {
      alert('Montar um pedido');
    } else {
      firebase.firestore().collection('orders').add({
        date,
        time,
        clock: new Date().getTime(),
        leadTime: '',
        client,
        table,
        order,
        status: 'em preparação',
      }).then(
        setClient(''),
        setTable(''),
        setOrder([]),
      );
    }
  }

  function showMenu(e) {
    const change = e.target.id;
    setmenufilter(menu.filter((i) => i.menu === change));
  }

  function addItem(item) {
    if (order.some((i) => item.id === i.id)) {
      if (item.option) {
        if (order.some((i) => i.optionChange === item.optionChange)) {
          item.quant += 1;
          item.total = item.quant * item.value;
          setOrder([...order]);
        } else {
          item.quant = 1;
          item.total = item.quant * item.value;
          //item.optionChange = option;
          setOrder([...order, item]);
        }
      } else {
        item.quant += 1;
        item.total = item.quant * item.value;
        setOrder([...order]);
      }
    } else {
      item.quant = 1;
      item.total = item.quant * item.value;
      if (item.option) {
        //item.optionChange = option;
      }
      setOrder([...order, item]);
    }
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
    <div className={css(styles.divmain)}>
      <section className={css(styles.menu)}>
        <h4 className={css(styles.title)}>Menu</h4>
        <Button name="Café da manhã" id="breakfast" handleClick={(e) => showMenu(e)} />
        <Button name="Restante do dia" id="lunch" handleClick={(e) => showMenu(e)} />
        <article className={css(styles.menuItem)}>
          {menufilter.map((i) => (
            <Menu
              item={i.item}
              icon={i.icon}
              value={i.value}
              option={i.option}
              add={i.add}
              handleClick={() => addItem(i)}
            />
          ))}
        </article>
      </section>
      <section className={css(styles.commands)}>
        <h4 className={css(styles.title)}>Pedido</h4>
        <Input label="Nome do cliente  " id="inputName" value={client} type="text" handleClick={(e) => setClient(e.currentTarget.value)} />
        <Input label="Nº da mesa  " id="inputTable" value={table} type="text" handleClick={(e) => setTable(e.currentTarget.value)} />
        <article className={css(styles.commandsList)}>
          {order.map((i) => (
            <List
              key={i.id}
              item={i.item}
              value={i.value}
              quant={i.quant}
              option={i.optionChange ? i.option : []}
              addition={i.addChange ? i.addChange : []}
              handleClick={() => deleteItem(i)}
            />
          ))}
        </article>
        <div className={css(styles.total)}>
          <p>Total </p>
          <p>{order.reduce(((sumTotal, i) => sumTotal + i.total), 0).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
        </div>
        <Button name="Salvar" handleClick={() => infoClient()} />
      </section>
    </div>
  );
};


export default MakeOrder;
