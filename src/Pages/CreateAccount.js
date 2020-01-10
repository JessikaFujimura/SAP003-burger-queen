import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import { StyleSheet, css } from 'aphrodite';
import { auth, firestore } from '../utils/firebase';
import Header from '../Components/Header';
import Input from '../Components/Input';
import Button from '../Components/Button';
import header from '../Image/Header.png';

const styles = StyleSheet.create({
  input: {
    width: '70vw',
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
    },
  },
  header: {
    backgroundImage: `url(${header})`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '30vh',
    padding: '3% 0 0',
    '@media (min-width: 992px)': {
      backgroundSize: '50%',
    },
  },
  main: {
    textAlign: 'center',
  },
  form: {
    width: '80vw',
    margin: '5vh auto',
    '@media (min-width: 992px)': {
      width: '50vw',
    },
  },
  fieldset: {
    padding: '5vw',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  legend: {
    fontSize: '1.8rem',
    fontWeight: 'bolder',
  },
  text: {
    fontSize: '1.4rem',
  },
});

const CreateAccount = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [ocupation, setOcupation] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  const options = [
    { value: '', label: '' },
    { value: 'Waiter', label: 'Garçon' },
    { value: 'Kitchen', label: 'Cozinheiro' },
  ];

  function newAccount() {
    auth.createUserWithEmailAndPassword(email, password).then(
      auth.onAuthStateChanged(() => {
        if (auth.currentUser) {
          firestore.collection('user').add({
            name,
            ocupation,
            uid: auth.currentUser.uid,
          });
          auth.currentUser.updateProfile({
            displayName: name,
          });
        }
      }),
    );
    if (ocupation === 'Waiter') {
      history.push('/Waiter');
    } else {
      history.push('/Kitchen');
    }
  }

  return (
    <main className={css(styles.main)}>
      <Header
        classname={css(styles.header)}
        text="Seu fast-food 24 Horas"
      />
      <form className={css(styles.form)}>
        <fieldset className={css(styles.fieldset)}>
          <legend className={css(styles.legend)}>Criar conta</legend>
          <Input
            classname={css(styles.input)}
            label="Nome"
            id="inputName"
            value={name}
            type="text"
            handleClick={(e) => setName(e.currentTarget.value)}
          />
          <p className={css(styles.text)}>
            Ocupação:
            <Select onChange={(opt) => setOcupation(opt.value)} options={options} />
          </p>
          <Input
            classname={css(styles.input)}
            label="Email"
            id="inputEmail"
            value={email}
            type="text"
            handleClick={(e) => setEmail(e.currentTarget.value)}
          />
          <Input
            classname={css(styles.input)}
            label="Senha"
            id="inputSenha"
            value={password}
            type="password"
            handleClick={(e) => setPassword(e.currentTarget.value)}
          />
          <Button handleClick={() => newAccount()} name="Registrar-se" id="Create" />
        </fieldset>
      </form>
    </main>
  );
};

export default CreateAccount;
