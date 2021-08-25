import React, { useState, useEffect } from "react";
import { fetchPostData } from "../../apiCalls";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.js"
import "./Posts.css";

const Posts = (props) => {
    const { token, user } = props
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

    const deleteHandler = async (post_id) => {
        try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/posts/${post_id}/`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                } 
            })
            const result = await response.json();
            console.log(result);
            await fetchPosts()
            return result
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
                        <div className="nonUserNav">
                            <Link to="/users/login">
                                <button type="button" className="btn btn-primary loginRegisterBtn">Login / Register</button>
                            </Link>
                            <h1 className="text-white nonUserTitle">Stranger Things</h1>
                        </div>
                    </nav>
            }
            <div className="container">
                {
                    token ? <h5 className="display-5">Post a listing or search for one!</h5>
                        : <h3 className="display-6">Login / Register to add a listing!</h3>
                }
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
                            {
                                token && post.author.username === user ? 
                                <button
                                type="submit"
                                onClick={() => deleteHandler(post._id)} 
                                className="btn btn btn-danger"
                                >Delete</button>
                                : null
                            }
                        </div>
                    )
                })
            }
        </>
    )
}

export default Posts;