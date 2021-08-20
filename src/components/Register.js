import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchRegisterData } from "../apiCalls";

const Register = (props) => {
    const { setToken, setUser } = props
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
            <button type="submit" disabled={!username || !password}>Register</button>
        </form>
    )
}

export default Register;