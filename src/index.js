import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css";
import {
  Home,
  Login,
  Navbar,
  Posts,
  Register,
} from "./components";

const App = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");

  console.log(token);

  console.log(user);

  return (
    <>
      <Navbar setToken={setToken} token={token}/>
      <Switch>
        <Route exact path="/">
          <Home user={user} token={token}/>
        </Route>
        <Route path="/users/login">
          <Login setToken={setToken} setUser={setUser} />
        </Route>
        <Route path="/posts">
          <Posts token={token}/>
        </Route>
        <Route path="/users/register">
          <Register setToken={setToken}/>
        </Route>
      </Switch>
    </>
  )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
);