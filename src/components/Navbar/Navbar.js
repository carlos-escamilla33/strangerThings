import React from "react";
import { Link } from "react-router-dom"

const Navbar = (props) => {
    const { token, setToken } = props
    const style = {
        color: "white",
        textDecoration: "none"
    };

    const logout = () => {
        setToken("")
    };

    return (
        <>
            {
                token ? <nav className="navbar d-flex justify-content-around navbar-dark bg-dark">
                    <Link style={style} to="/">
                        <h1 >Stranger Things</h1>
                    </Link>
                    <Link style={style} to="/">
                        <h4 className="navbar-item" >Home</h4>
                    </Link>
                    <Link style={style} to="/posts">
                        <h4 className="navbar-item" >Posts</h4>
                    </Link>
                    <Link style={style} to="/profile">
                        <h4 className="navbar-item">Profile</h4>
                    </Link>
                    <Link style={style} className="navbar-item" to="/users/login">
                        <button
                            onClick={logout}
                            className="btn btn-dark">
                            <h4>Logout</h4>
                        </button>
                    </Link>
                </nav> : null
            }
        </>
    )
}

export default Navbar;