import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {
  Login,
  Navbar,
  Posts,
  Register
} from "./components";
const App = () => {
  return (
      <>
        <Register />
        <Posts />
      </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);