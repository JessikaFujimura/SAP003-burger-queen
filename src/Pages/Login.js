import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import { auth, firestore } from '../utils/firebase';
import Header from '../Components/Header';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Modal from '../Components/Modal';

const styles = StyleSheet.create({
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
});

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const history = useHistory();

  function SingIn() {
    if (!email) {
      setShow(true);
    } else if (!password) {
      setShow(true);
    } else {
      auth.signInWithEmailAndPassword(email, password).then(
        firestore.collection('user').where('uid', '==', auth.currentUser.uid).get().then(
          (snapshot) => {
            snapshot.forEach((doc) => {
              if (doc.data().ocupation === 'Waiter') {
                history.push('/Waiter');
              } else {
                history.push('/Kitchen');
              }
            });
          },
        ),
      );
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
      <Header />
      <form className={css(styles.form)}>
        <fieldset className={css(styles.fieldset)}>
          <legend className={css(styles.legend)}>Log in</legend>
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
          <Button handleClick={() => SingIn()} name="Login" id="Login" />
        </fieldset>
      </form>
      <p>
        Não tem uma conta?
        <h4><Link to="/CreateAccount">Crie uma!</Link></h4>
      </p>
    </main>
  );
};

export default Login;
