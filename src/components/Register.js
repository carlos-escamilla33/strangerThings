import React, { useState } from "react"
import {fetchRegisterData} from "../apiCalls";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    const submitHandler = async (event) => {
        event.preventDefault();
    
        const formData = {
            username: user.username,
            password: user.password
        }

        await fetchRegisterData(formData)

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
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    )
}

export default Register;