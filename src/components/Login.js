import React, { useState} from "react";
import {Link} from "react-router-dom";
import {fetchLoginData} from "../apiCalls";
import {useHistory} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const fetchLoginData = async () => {
        try {
            const response = fetchLoginData(username, password);
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setUsername("")
        setPassword("");
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div>
                    <input placeholder="Username"minLength="8" type='text' name='username' value={username} onChange={(event) => setUsername(event.target.value)} required />
                </div>
                <div>
                    <input placeholder="Password"minLength="8" type='password' name='password' value={password} onChange={(event) => setPassword(event.target.value)} required />
                </div>
                <button type='submit'>Login</button>
            </form>
            <Link to="users/register">
                Don't have an account? Sign Up
            </Link>
        </>
    )
}

export default Login;