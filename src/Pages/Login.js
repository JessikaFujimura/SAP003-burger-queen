import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import { auth } from '../utils/firebase';
import Header from '../Components/Header';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Waiter from './Waiter';

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

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function SingIn() {
    auth.signInWithEmailAndPassword(email, password).then(
      <Route path="/Waiter" component={Waiter} />,
    );
  }

  return (
    <main>
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
      <p className={css(styles.p)}>
        Não tem uma conta?
        <h4><Link to="/CreateAccount">Crie uma!</Link></h4>
      </p>
    </main>
  );
};

export default Login;
