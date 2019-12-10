import React from 'react';
import './App.css';
import Input from './components/input'
import Button from './components/Button/button'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Burger Queen
      </header>
      <main className="App-main"> 
      
        <label>Nome do Cliente<Input /></label>
        <Button />
        <label>Número da mesa <Input /></label>
        <Button />
      </main>
    </div>
  );
}


export default App;
