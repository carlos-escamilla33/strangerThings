import React, { useState } from "react";
import { useHistory, } from "react-router-dom";
import { fetchRegisterData } from "../../apiCalls";
import "./Register.css"

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
                <div className="nav-spacing registerNav">
                    <button
                        type="button"
                        className="btn btn-primary backBtn"
                        onClick={goBack}
                    >Back</button>
                    <h1 className="text-white strangerTitle">Stranger Things</h1>
                </div>
            </nav>
            <form className="container registerForm" onSubmit={submitHandler}>
                <h2 className="centerRegister registerBtnTitle">Register</h2>
                <p className="centerRegister">Create your account. It's free and only takes a minute.</p>
                <div className="centerRegister">
                    <input
                        className="inputRegister"
                        placeholder=" Username"
                        value={username}
                        onChange={usernameChangeHandler}
                        minLength="8"
                        type='text'
                        required />
                </div>
                <div className="centerRegister">
                    <input
                        className="inputRegister"
                        placeholder=" Password"
                        value={password}
                        onChange={passwordChangeHandler}
                        minLength="8"
                        type='password'
                        required />
                </div>
                <div className="centerRegister">
                    <button type="submit"
                        className="btn btn-lg btn-success registerBtn"
                    >Register</button>
                </div>
            </form>
        </>
    )
}

export default Register;