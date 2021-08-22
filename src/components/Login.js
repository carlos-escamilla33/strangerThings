import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fetchLoginData } from "../apiCalls";
import { useHistory } from "react-router-dom";
import "./css/style.css";

const Login = (props) => {
    const { setToken, setUser } = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const fetchDataLogin = async () => {
        try {
            const response = await fetchLoginData(username, password);
            if (response) {
                setToken(response.token)
                setUser(username)
                if (response.token) {
                    history.push("/profile")
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
            <nav className="navbar navbar-dark bg-dark">
                <div>
                    <h1 className="text-white strangerTitle">Stranger Things</h1>
                </div>
            </nav>
            <form className="container" onSubmit={handleSubmit}>
                <h2 className="center title">Login</h2>
                <div className="center">
                    <input
                        placeholder=" Username"
                        value={username}
                        onChange={loginUsernameHandler}
                        minLength="8"
                        type='text'
                        required />
                </div>
                <div className="center">
                    <input
                        placeholder=" Password"
                        value={password}
                        onChange={loginPasswordHandler}
                        minLength="8"
                        type='password'
                        required />
                </div>
                <div className="center">
                    <button type="submit" className="btn btn-lg btn-primary customBtn">Login</button>
                </div>
                <div className="center">
                    <Link to="/posts">
                        <button type="button" className="btn btn-lg btn-primary customBtn">Skip</button>
                    </Link>
                </div>
                <hr></hr>
                <div className="center">
                    <Link to="/users/register">
                        <button type="button" className="btn btn-lg btn-success">Create New Account</button>
                    </Link>
                </div>
            </form>
        </>
    )
}

export default Login;