import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Waiter from './Pages/Waiter';
import Kitchen from './Pages/Kitchen';
import CreateAccount from './Pages/CreateAccount';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter className="App">
      <Route exact path="/" component={Login} />
      <Route path="/CreateAccount" component={CreateAccount} />
      <Route path="/Waiter" component={Waiter} />
      <Route path="/Kitchen" component={Kitchen} />
    </BrowserRouter>
  );
}

export default App;


//<Route path="/Waiter" component={Waiter} />
//<Route path="/Kitchen" component={Kitchen} />