import React from 'react';
import Home from './Pages/Pedido';
import { StyleSheet, css } from 'aphrodite';
import Header from './Components/Header';
import Nav from './Components/Nav';

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    width: 'auto',
    color: 'black',
  },
});

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <main className={css(styles.main)}>
        <Home />
      </main>
    </div>
  );
}

export default App;
