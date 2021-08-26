import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css";
import {
  Home,
  Profile,
  UserPosts,
  Login,
  Navbar,
  Posts,
  Register,
} from "./components";

const App = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  console.log(token);

  console.log(user);

  return (
    <>
      <Navbar setToken={setToken} token={token} />
      <Switch>
        <Route exact path="/">
          <Home user={user} token={token} />
        </Route>
        <Route exact path="/users/login">
          <Login setToken={setToken} setUser={setUser} />
        </Route>
        <Route path="/posts">
          <Posts token={token} user={user} posts={posts} setPosts={setPosts}/>
        </Route>
        <Route path="/users/register">
          <Register setToken={setToken} />
        </Route>
        <Route path="/profile">
          <Profile token={token} />
        </Route>
        <Route path="/users/posts/add">
          <UserPosts token={token} setPosts={setPosts}/>
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