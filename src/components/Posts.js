import React, { useState, useEffect } from "react";
import { fetchPostData } from "../apiCalls";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.js"

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
                        <div className="strangerTitle">
                            <h1 className="text-white">Stranger Things</h1>
                            <Link to="/users/login">
                                <button type="button" className="btn btn-primary">Login/Register</button>
                            </Link>
                        </div>
                    </nav>
            }
            <form>
                <label><h1>POST</h1></label>
                {
                    token ?
                        <Link to="/users/posts/add">
                            <button type="submit" className="btn btn-success">Add Post</button>
                        </Link>
                        : null
                }
                <input placeholder="Search Posts"></input>
            </form>
                {
                    posts.map(post => {
                        return (
                                <div key={post._id}>
                                        <h3>{post.title}</h3>
                                        <h5>Price: {post.price}</h5>
                                        <h5>Location: {post.location}</h5>
                                        <p> Seller: {post.author.username}</p>
                                        <p> Description: {post.description}</p>
                                </div>
                        )
                    })
                }
        </>
    )
}

export default Posts;