import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Stranger Things</a>
                <a className="navbar-item" href="#">Home</a>
                <a className="navbar-item" href="#">Posts</a>
                <a className="navbar-item" href="#">Profile</a>
                <a className="navbar-item" href="#">Login</a>
            </div>
        </nav>
    )
}

export default Navbar;