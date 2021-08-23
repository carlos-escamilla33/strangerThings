import React, { useState, useEffect } from "react";
import { fetchPostData } from "../../apiCalls";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.js"
import "./Posts.css";

const Posts = (props) => {
    const { token } = props
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const res = await fetchPostData()
            setPosts(res);
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <>
            {
                token ? <Navbar /> :
                    <nav className="navbar navbar-dark bg-dark">
                        <div>
                            <h1 className="text-white">Stranger Things</h1>
                            <Link to="/users/login">
                                <button type="button" className="btn btn-primary">Login/Register</button>
                            </Link>
                        </div>
                    </nav>
            }
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h5 className="display-5">Post a listing or search for one!</h5>
                </div>
            </div>
            <form className="postsForm">
                {
                    token ?
                        <Link to="/users/posts/add">
                            <button
                                type="submit"
                                className="btn btn-lg btn-primary"
                            >Add Post</button>
                        </Link>
                        : null
                }
                <input
                    className="postsInput"
                    placeholder="Search Posts"
                />
            </form>
            {
                posts.map(post => {
                    return (
                        <div className="container" key={post._id}>
                            <h3>{post.title}</h3>
                            <h5 className="display-7">Price: {post.price}</h5>
                            <h5 className="display-7">Location: {post.location}</h5>
                            <p className="lead"> Seller: {post.author.username}</p>
                            <p className="lead"> Description: {post.description}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Posts;