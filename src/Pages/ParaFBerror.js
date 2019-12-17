/* import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Card from '../Components/Card';
import { StyleSheet, css } from 'aphrodite';

const Home = () => {
  const [menu, setmenu] = useState([]);
  const menus = [];

  useEffect(() => {
    firebase.firestore().collection('Menu').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          menus.push(doc.data());
        });
        setmenu(menus);
      });
  }, [menus]);

  function infoClient() {
    const name = document.querySelector('#name').value;
    const table = document.querySelector('#table').value;
    firebase.firestore().collection('Pedido').add({
      name,
      table,
    });
  }

  function showMB(array) {
    const MB = array.filter((i) => {
      i.menu.includes("breakfast")})
  return MB;
}


  return (
    <div className={css(styles.divmain)}>
      <section className={css(styles.menu)}>
        <h3>Menu</h3>
        <Button name={"Café da manhã"} onClick={showMB(menus)}/>
        <Button name={"Lanche"} />
        {menu.map((i) => <Card item={i.item} value={i.value} />)}
      </section>
      <section className={css(styles.commands)}>
        <Input label="Nome do cliente  " id="name" />
        <Input label="Nº da mesa  " id="table" />
        <Button name="Salvar" onClick={() => infoClient} />
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
 */

/* firebase.firestore().collection('menu').add({
  item: "Café americano", value: 5, menu:"breakfast", option:[], add:[] })
firebase.firestore().collection('menu').add({
  item: "Café com leite", value: 7, menu:"breakfast", option:[], add:[] })
firebase.firestore().collection('menu').add({
  item: "Misto quente", value: 10, menu:"breakfast", option:[], add:[] })
firebase.firestore().collection('menu').add({
  item: "Suco de fruta natural", value: 7, menu:"breakfast", option:[], add:[] })
firebase.firestore().collection('menu').add({
  item: "Hambúrguer simples", value: 10, menu:"lunch", option:["bovino", "frango", "vegetariano"], add:["ovo", "queijo"] })
firebase.firestore().collection('menu').add({
  item: "Hambúrguer duplo", value: 15, menu:"lunch", option:["bovino", "frango", "vegetariano"], add:["ovo", "queijo"] })
firebase.firestore().collection('menu').add({
  item: "Batata frita", value: 5, menu:"lunch", option:[], add:[] })
firebase.firestore().collection('menu').add({
  item: "Anéis de cebola", value: 7, menu:"lunch", option:[], add:[] })
firebase.firestore().collection('menu').add({
  item: "Água 500mL", value: 5, menu:"lunch", option:[], add:[] })
firebase.firestore().collection('menu').add({
  item: "Água 750mL", value: 7, menu:"lunch", option:[], add:[] })
firebase.firestore().collection('menu').add({
  item: "Refrigerante 500mL", value: 7, menu:"lunch", option:[], add:[] })
firebase.firestore().collection('menu').add({
  item: "Refrigerante 750mL", value: 10, menu:"lunch", option:[], add:[] }) */