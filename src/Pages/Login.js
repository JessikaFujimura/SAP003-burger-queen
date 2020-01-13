import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import Swal from 'sweetalert2';
import { auth, firestore } from '../utils/firebase';
import Header from '../Components/Header';
import Input from '../Components/Input';
import Button from '../Components/Button';
import header from '../Image/Header.png';

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
    margin: '1% auto',
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
    maxHeight: '20vw',
    padding: '3% 0 0',
    '@media (min-width: 992px)': {
      backgroundSize: '50vw',
      maxHeight: '9vw',
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
    padding: '1vw 5vw',
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
  const history = useHistory();


  function SingIn() {
    if (!email) {
      Swal.fire({
        text: 'Prencha o campo de "email"',
        icon: 'warning',
      });
    } else if (!password) {
      Swal.fire({
        text: 'Prencha o campo de "senha"',
        icon: 'warning',
      });
    } else {
      auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
          firestore.collection('user').doc(user.user.uid).get()
            .then((doc) => {
              if (doc.data().ocupation === 'Waiter') {
                history.push('/Waiter');
              } else {
                history.push('/Kitchen');
              }
            });
        })
        .catch((error) => {
          if (error.code === 'auth/user-not-found') {
            Swal.fire({
              text: 'Usuário não encontrado',
              icon: 'warning',
            });
          } else if (error.code === 'auth/wrong-password') {
            Swal.fire({
              text: 'Senha errada',
              icon: 'warning',
            });
          } else {
            Swal.fire({
              text: 'Usuário não cadastrado',
              icon: 'warning',
            });
          }
        });
    }
  }


  return (
    <main className={css(styles.main)}>
      <Header
        classname={css(styles.header)}
        text="Seu fast-food 24 Horas"
        link="/"
      />
      <form className={css(styles.form)}>
        <fieldset className={css(styles.fieldset)}>
          <legend className={css(styles.legend)}>Log in</legend>
          <Input
            classname={css(styles.input)}
            placeholder="example@example.com"
            label="Email:"
            id="inputEmail"
            value={email}
            type="text"
            handleClick={(e) => setEmail(e.currentTarget.value)}
          />
          <Input
            classname={css(styles.input)}
            placeholder="*******"
            label="Senha:"
            id="inputSenha"
            value={password}
            type="password"
            handleClick={(e) => setPassword(e.currentTarget.value)}
          />
          <Button
            handleClick={() => SingIn()}
            name="Login"
            id="Login"
            classname={css(styles.button)}
          />
        </fieldset>
      </form>
      <p>
        <span>Não tem uma conta? </span>
        <strong><Link to="/CreateAccount">Crie uma!</Link></strong>
      </p>
    </main>
  );
};

export default Login;
