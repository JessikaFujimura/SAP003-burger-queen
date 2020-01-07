import React, { useState } from 'react';
import { auth} from '../utils/firebase';
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
          <option value="Garcon">Garçon</option>
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
        <Button handleClick={() => newAccount()} name="Criar conta" id="Create" />
      </fieldset>
    </form>
  );
};

export default CreateAccount;
