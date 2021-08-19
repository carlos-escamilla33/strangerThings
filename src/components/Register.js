import React, { useState } from "react"
import { Link } from "react-router-dom"
import { fetchRegisterData } from "../apiCalls";

const Register = (props) => {
    const {setToken} = props
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const usernameChangeHandler = (event) => {
        setUsername(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    const logIn = async () => {
        const response = await fetchRegisterData(formData);
        setToken(response)
    }

    const formData = {
        user: {
            username: username,
            password: password
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();

        logIn();

        setUsername("");
        setPassword("");
    }
    return (
            <form onSubmit={submitHandler}>
                <h2>Register</h2>
                <p>Create your account. It's free and only takes a minute.</p>
                <div>
                    <input
                        placeholder="Username"
                        value={username}
                        onChange={usernameChangeHandler}
                        minLength="8"
                        type='text'
                        required />
                </div>
                <div>
                    <input
                        placeholder="Password"
                        value={password}
                        onChange={passwordChangeHandler}
                        minLength="8"
                        type='password'
                        required />
                </div>
                <button type="submit">Register</button>
            </form>
    )
}

export default Register;