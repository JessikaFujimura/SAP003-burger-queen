import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Waiter from './Pages/Waiter';
import Kitchen from './Pages/Kitchen';
import CreateAccount from './Pages/CreateAccount';
import Login from './Pages/Login';
import Denied from './Pages/Denied';
//import { auth } from './utils/firebase';

const PrivatePage = (
  { component: Component, ...rest },
) => {
  //const user = auth.currentUser;
  return (
    <Route
      {...rest}
      render={(props) => (true ? (<Component {...props} />) : (
        <Redirect to={{ pathname: '/Denied', state: { from: props.location } }} />
      ))}
    />
  );
};


function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/CreateAccount" component={CreateAccount} />
        <PrivatePage path="/Waiter" component={Waiter} />
        <PrivatePage path="/Kitchen" component={Kitchen} />
        <Route path="/Denied" component={Denied} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
