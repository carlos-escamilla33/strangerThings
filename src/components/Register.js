import React, { useState, useEffect } from "react";
import { fetchRegisterData } from "../api";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const fetchRegister = async () => {
        const res = await fetchRegisterData();
        setUsername(res)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username);
        console.log(password);
        setUsername("");
        setPassword("");
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username:</label>
            <input minLength="8" type='text' name='username' value={username} onChange={(event) => setUsername(event.target.value)} required />
            <label htmlFor='password'>Password:</label>
            <input minLength="8" type='password' name='password' value={password} onChange={(event) => setPassword(event.target.value)} required />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Register;