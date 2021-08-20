import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fetchLoginData } from "../apiCalls";
import { useHistory } from "react-router-dom";

const Login = (props) => {
    const { setToken,  setUser} = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const fetchDataLogin = async () => {
        try {
            const response = await fetchLoginData(username, password);
            if (response) {
                setToken(response.token)
                setUser(username)
                if (response.token ) {
                    history.push("/")
                }
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const loginUsernameHandler = (event) => {
        setUsername(event.target.value)
    }

    const loginPasswordHandler = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        fetchDataLogin();

        setUsername("");
        setPassword("");
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <input
                        placeholder="Username"
                        value={username}
                        onChange={loginUsernameHandler}
                        minLength="8"
                        type='text'
                        required />
                </div>
                <div>
                    <input
                        placeholder="Password"
                        value={password}
                        onChange={loginPasswordHandler}
                        minLength="8"
                        type='password'
                        required />
                </div>
                <button type="submit" disabled={!username || !password}>Login</button>
            </form>
            <Link to="/users/register">
                Don't have an account? Sign Up
            </Link>
        </>
    )
}

export default Login;