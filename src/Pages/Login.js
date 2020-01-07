import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { auth } from '../utils/firebase';
import CreateAccount from './CreateAccount';
import Input from '../Components/Input';
import Button from '../Components/Button';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function SingIn() {
    auth.signInWithEmailAndPassword(email, password);
  }

  return (
    <div>
      <form>
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
      </form>
      <p>
        Não tem uma conta?
        <Link to="/CreateAccount">Crie uma conta clicando aqui!</Link>
        <Route path="/CreateAccount" component={CreateAccount} />
      </p>
    </div>
  );
};

export default Login;
