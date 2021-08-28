import React, { useState } from "react";
import { Link } from "react-router-dom";
import { callApi } from "../../apiCalls";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = (props) => {
    const { setToken, setUser } = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const fetchDataLogin = async () => {
        try {
            const resp = await callApi({
                url: "/users/login/",
                method: "POST",
                body: {
                    user: {
                        username,
                        password
                    }
                }
            })
            if (resp) {
                setToken(resp.data.token)
                setUser(username)
                if (resp.data.token) {
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
            <nav className="navbar navbar-dark bg-dark">
                <div>
                    <h1 className="text-white navTitle">Stranger Things</h1>
                </div>
            </nav>
            <form className="loginForm container" onSubmit={handleSubmit}>
                <h2 className="centerLogin loginTitle">Login</h2>
                <div className="centerLogin">
                    <input
                        className="loginInput"
                        placeholder=" Username"
                        value={username}
                        onChange={loginUsernameHandler}
                        minLength="8"
                        type='text'
                        required />
                </div>
                <div className="centerLogin">
                    <input
                        className="loginInput"
                        placeholder=" Password"
                        value={password}
                        onChange={loginPasswordHandler}
                        minLength="8"
                        type='password'
                        required />
                </div>
                <div className="centerLogin">
                    <button 
                    type="submit" 
                    className="btn btnStyle btn-lg btn-primary"
                    >Login</button>
                </div>
                <div className="centerLogin">
                    <Link to="/posts">
                        <button 
                        type="button" 
                        className="btn btnStyle btn-lg btn-primary"
                        >Skip</button>
                    </Link>
                </div>
                <hr></hr>
                <div className="centerLogin">
                    <Link to="/users/register">
                        <button 
                        type="button" 
                        className="btn btnStyle color btn-lg btn-success"
                        >Create New Account</button>
                    </Link>
                </div>
            </form>
        </>
    )
}

export default Login;