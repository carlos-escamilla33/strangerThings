import React, {useState} from "react"
import fetchRegisterData from "../apiCalls";

const Register = () => {
    const [token, setToken] = useState("")

    const submitHandler = (event) => {
        event.preventDefault()

    }
    return (
        <form>
            <h2>Register</h2>
            <p>Create your account. It's free and only takes a minute.</p>
            <div>
                <input placeholder="Username" minLength="8" type='text' name='username' required/>
            </div>
            <div>
                <input placeholder="Password" minLength="8" type='text' name='password' required/>
            </div>
            <button minLength="8" type='text' name='username' required>Register</button>
        </form>
    )
}

export default Register;