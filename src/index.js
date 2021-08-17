import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Posts from "./Posts.js"
const App = () => {
  return (
      <>
        <Posts />
      </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);