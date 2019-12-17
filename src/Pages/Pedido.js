import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Card from '../Components/Card';
import { StyleSheet, css } from 'aphrodite';

const Home = () => {
  const [menu, setMenu] = useState([]);
  const [menufilter, setmenufilter] = useState([]);
  const [itemTake, setitemTake] = useState([]);
  const menus = [];

  useEffect(() => {
    firebase.firestore().collection('menu').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => menus.push(doc.data()));
      });
    setMenu(menus);
    setmenufilter(menus);
  }, []);

  function infoClient() {
    const name = document.querySelector('#name').value;
    const table = document.querySelector('#table').value;
    const command = itemTake;
    firebase.firestore().collection('Pedido').add({
      name,
      table,
      command,
    });
  }

  function showMenu(e) {
    const change = e.target.id;
    setmenufilter(menu.filter((i) => i.menu === change));
  }
  
  function addItem(item) {
    if (itemTake.includes(item)) {
      item.quant++
      setitemTake(itemTake);
    } else {
      item.quant = 1;
      setitemTake([...itemTake, item]);
    }
  }

  function deletItem(e) {
  
  }

  function template(array) {
    return array.map((i) => <Card item={i.item} value={i.value} action={() => addItem(i)} />);
  }

  return (
    <div className={css(styles.divmain)}>
      <section className={css(styles.menu)}>
        <h3>Menu</h3>
        <Button name="Café da manhã" id="breakfast" onClick={(e) => showMenu(e)} />
        <Button name="Restante do dia" id="lunch" onClick={(e) => showMenu(e)}/>
        {template(menufilter)}
      </section>
      <section className={css(styles.commands)}>
        <Input label="Nome do cliente  " id="name" />
        <Input label="Nº da mesa  " id="table" />
        <div>
        <h4>Pedido</h4>
          {itemTake.map((i) => <p> {i.item}
          <Button name="X" onClick={(e) => deletItem(e)} />
          </p>)}
        </div>
        <Button name="Salvar" onClick={() => infoClient()} />
      </section>
    </div>
  );
};

const styles = StyleSheet.create({
  divmain: {
    display: 'flex',
  },
  menu: {
    width: '50vw',
  },
  commands: {
    width: '50vw',
    border: '1px solid #420029',
  },
});

export default Home;
