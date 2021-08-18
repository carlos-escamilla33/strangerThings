import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css";
import {
  Login,
  Navbar,
  Posts,
  Register
} from "./components";

const App = () => {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <h1>Welcome to Stranger Things</h1>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/posts">
          <Posts posts={posts} setPosts={setPosts} />
        </Route>
        <Route path="/users/register">
          <Register />
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