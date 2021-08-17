import React, {useState} from 'react';
import ReactDOM from 'react-dom';
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
        <Register />
        <Posts posts={posts} setPosts={setPosts}/>
      </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);