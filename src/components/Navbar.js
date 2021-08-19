import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
    const style= {
        color: "white",
        textDecoration: "none"
      };

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
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
                    <h4 className="navbar-item" >Profile</h4>
                </Link>
                <Link style={style} to="/login">
                    <h4 className="navbar-item" >Login</h4>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;