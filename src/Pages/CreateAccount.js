import React, { useState } from 'react';
import { auth } from '../utils/firebase';
import Header from '../Components/Header';
import Input from '../Components/Input';
import Button from '../Components/Button';

const CreateAccount = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function newAccount() {
    auth.createUserWithEmailAndPassword(email, password);
  }

  return (
    <main>
      <Header />
      <form>
        <fieldset>
          <Input
            label="Nome"
            id="inputName"
            value={name}
            type="text"
            handleClick={(e) => setName(e.currentTarget.value)}
          />
          <select>
            <option value="">Setor</option>
            <option value="hall">Salão</option>
            <option value="Kitchen">Cozinha</option>
          </select>
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
          <Button handleClick={() => newAccount()} name="Registrar-se" id="Create" />
        </fieldset>
      </form>
    </main>
  );
};

export default CreateAccount;
