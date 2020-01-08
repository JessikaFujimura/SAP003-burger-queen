import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { StyleSheet, css } from 'aphrodite';
import { auth } from '../utils/firebase';
import Header from '../Components/Header';
import Input from '../Components/Input';
import Button from '../Components/Button';

const styles = StyleSheet.create({
  form: {
    width: '50vw',
    margin: '5vh auto',
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
  p: {
    textAlign: 'center',
  },
});

const CreateAccount = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [ocupation, setOcupation] = useState();
  const [password, setPassword] = useState();
  const options = [
    { value: '', label: '' },
    { value: 'Waiter', label: 'Garçon' },
    { value: 'Kitchen', label: 'Cozinheiro' },
  ];

  function newAccount() {
    auth.createUserWithEmailAndPassword(email, password);
  }

  return (
    <main>
      <Header />
      <form className={css(styles.form)}>
        <fieldset className={css(styles.fieldset)}>
          <Input
            label="Nome"
            id="inputName"
            value={name}
            type="text"
            handleClick={(e) => setName(e.currentTarget.value)}
          />
          <p>
            Ocupação:
            <Select onChange={(opt) => setOcupation(opt.value)} options={options} />
          </p>
          <Input
            label="Email"
            id="inputEmail"
            value={email}
            type="text"
            handleClick={(e) => setEmail(e.currentTarget.value)}
          />
          <Input
            label="Senha"
            id="inputSenha"
            value={password}
            type="password"
            handleClick={(e) => setPassword(e.currentTarget.value)}
          />
          <Link to="/Waiter">
            <Button handleClick={() => newAccount()} name="Registrar-se" id="Create" />
          </Link>
        </fieldset>
      </form>
    </main>
  );
};

export default CreateAccount;
