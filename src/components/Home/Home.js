import React from "react";
import Navbar from "../Navbar/Navbar.js"
import { useHistory, Link } from "react-router-dom"
import "./Home.css"
const Home = (props) => {
    const history = useHistory()
    const { user, token } = props;
    return (
        <>

            {
                user.length > 1 && token ?
                    <>
                        <Navbar />
                        <div className="container home text-center">
                            <h1 className="display-1">Welcome to Stranger Things</h1>
                            <h2 className="lead">You are logged in as {user}</h2>
                            <Link to="/profile">
                            <button type="submit" className="btn btn-lg btn-outline-primary">View Profile</button>
                        </Link>
                        </div>
                    </> :
                    history.push("/users/login")
            }
        </>
    )
}

export default Home;