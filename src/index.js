import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Posts from "./components/Posts.js"
import Register from "./components/Register.js"
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