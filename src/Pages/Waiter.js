import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import firebase from '../utils/firebase';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Card from '../Components/Card';
import List from '../Components/List';

const Waiter = () => {
  const [menu, setMenu] = useState([]);
  const [menufilter, setmenufilter] = useState([]);
  const [order, setOrder] = useState([]);


  useEffect(() => {
    firebase.firestore().collection('menu').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => setMenu((current) => [...current, doc.data()]));
      });
  }, []);


  function infoClient() {
    let name = document.querySelector('#inputName').value;
    let table = document.querySelector('#inputTable').value;
    if (name === '' || table === '') {
      alert('Preencher todos os campos');
    } else if (order === []) {
      alert('Montar um pedido');
    } else {
      firebase.firestore().collection('orders').add({
        data: new Date().getTime(),
        name,
        table,
        order,
      });
    }
    name = '';
    table = '';
  }

  function showMenu(e) {
    const change = e.target.id;
    setmenufilter(menu.filter((i) => i.menu === change));
  }

  function addItem(item) {
    if (order.some((i) => i.id === item.id)) {
      if (order.option !== item.option && order.add !== item.add) {
        item.optionChange = document.querySelector('input[name="option"]:checked').value;
        item.addChange = document.querySelector('input[name="addition"]:checked').value;
        item.quant = 1;
        item.total = item.quant * item.value;
        setOrder([...order, item]);
      } else {
        item.quant += 1;
        item.total = item.quant * item.value;
        setOrder([...order]);
      }
    } else {
      item.quant = 1;
      item.total = item.quant * item.value;
      if (item.option && item.add) {
        if (order.option !== item.option && order.add !== item.add) {
          item.optionChange = document.querySelector('input[name="option"]:checked').value;
          item.addChange = document.querySelector('input[name="addition"]:checked').value;
          item.quant = 1;
          item.total = item.quant * item.value;
        } else {
          setOrder([...order, item]);
        };
        item.optionChange = document.querySelector('input[name="option"]:checked').value;
        item.addChange = document.querySelector('input[name="addition"]:checked').value;
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
      item.option = [item.option];
      setOrder([...order]);
    }
  }


  return (
    <div className={css(styles.divmain)}>
      <section className={css(styles.menu)}>
        <h4>Menu</h4>
        <Button name="Café da manhã" id="breakfast" handleClick={(e) => showMenu(e)} />
        <Button name="Restante do dia" id="lunch" handleClick={(e) => showMenu(e)} />
        <article className={css(styles.menuItem)}>
        {menufilter.map((i) =>
          <Card item={i.item} icon={i.icon} value={i.value} option={i.option} add={i.add} handleClick={() => addItem(i)} />)}
        </article>
      </section>
      <section className={css(styles.commands)}>
        <h4>Pedido</h4>
        <Input label="Nome do cliente  " id="inputName" type="text" />
        <Input label="Nº da mesa  " id="inputTable" type="text" />
        <article>
          {order.map((i) => <List key={i.id} item={i.item} value={i.value} quant={i.quant} option={i.optionChange} addition={i.addChange} handleClick={() => deleteItem(i)} />)}
        </article>
        <article>
          <span>
            Total
          </span>
          {order.reduce(((sumTotal, i) => sumTotal + i.total), 0).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </article>
        <Button name="Salvar" handleClick={() => infoClient()} />
      </section>
    </div>
  );
};

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
  menuItem: {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap',
  },
});

export default Waiter;
