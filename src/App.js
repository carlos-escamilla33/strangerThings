import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css";
import {
    Home,
    Profile,
    UserPosts,
    Login,
    Navbar,
    Posts,
    Register
} from "./components";

const App = () => {
    const [token, setToken] = useState("");
    const [user, setUser] = useState("");
    const [posts, setPosts] = useState([]);

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
                    <Posts token={token} user={user} posts={posts} setPosts={setPosts} />
                </Route>
                <Route path="/users/register">
                    <Register setToken={setToken} />
                </Route>
                <Route path="/profile">
                    <Profile token={token} user={user} />
                </Route>
                <Route path="/users/posts/add">
                    <UserPosts token={token} setPosts={setPosts} />
                </Route>
            </Switch>
        </>
    )
}

export default App;