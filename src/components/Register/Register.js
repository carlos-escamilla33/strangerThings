import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchRegisterData } from "../../apiCalls";
// import "./css/style.css";

const Register = (props) => {
    const { setToken } = props
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const usernameChangeHandler = (event) => {
        setUsername(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value)
    }


    const submitHandler = (event) => {
        event.preventDefault();

        const registerUser = async () => {
            try {
                const response = await fetchRegisterData(username, password);
                if (response) {
                    setToken(response.token)
                    if (response.token) {
                        history.push("/users/login")
                    }
                }
            }
            catch (err) {
                console.log(err)
            }
        }

        registerUser();

        setUsername("");
        setPassword("");

    }

    const goBack = () => history.goBack();

    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="nav-spacing">
                    <h1 className="text-white">Stranger Things</h1>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={goBack}
                    >Back</button>
                </div>
            </nav>
            <form className="container" onSubmit={submitHandler}>
                <h2 className="center title">Register</h2>
                <p className="center">Create your account. It's free and only takes a minute.</p>
                <div className="center">
                    <input
                        placeholder=" Username"
                        value={username}
                        onChange={usernameChangeHandler}
                        minLength="8"
                        type='text'
                        required />
                </div>
                <div className="center">
                    <input
                        placeholder=" Password"
                        value={password}
                        onChange={passwordChangeHandler}
                        minLength="8"
                        type='password'
                        required />
                </div>
                <div className="center">
                    <button type="submit" className="btn btn-lg btn-success">Register</button>
                </div>
            </form>
        </>
    )
}

export default Register;