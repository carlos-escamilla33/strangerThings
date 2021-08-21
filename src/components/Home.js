import React from "react";
import Navbar from "./Navbar.js"
import {useHistory} from "react-router-dom"
const Home = (props) => {
    const history = useHistory()
    const { user, token } = props;
    return (
        <>

            {
                user.length > 1  && token ? 
                <>
                <Navbar /> 
                <h1 className="red">Welcome to Stranger Things</h1>
                <h2>You are logged in as {user}</h2>
                </> : 
                    history.push("/users/login")
            }
        </>
    )
}

export default Home;