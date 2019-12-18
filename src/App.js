import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Waiter from './Pages/Waiter';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Kitchen from './Pages/Kitchen';

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Nav />
      <Route path="/Waiter" component={Waiter} />
      <Route path="/Kitchen" component={Kitchen} />
    </BrowserRouter>
  );
}

export default App;
