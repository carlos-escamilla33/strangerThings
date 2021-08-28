import React, { useState, useEffect } from "react";
import { callApi } from "../../apiCalls";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.js";
import PostResults from "../PostResults/PostResults.js";
import "./Posts.css";

const Posts = (props) => {
    const { token, user, setPosts, posts } = props;

    const fetchPosts = async () => {
        try {
            const res = await callApi({
                url: "/posts",
            })
            setPosts(res.data.posts);
        }
        catch (err) {
            console.log(err)
        }
    }

    const deleteHandler = async (post_id) => {
        try {
            const resp = await callApi({
                url: `/posts/${post_id}`,
                method: "DELETE",
                token
            })
            await fetchPosts()
            return resp;
        }
        catch (err) {
            console.log(err);
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
            <div className="container centerTitle">
                {
                    token ? <h3 className="display-5">Post a listing or search for one!</h3>
                        : <h3 className="display-6">Login / Register to add a listing!</h3>
                }
            </div>
            {
                token ?
                    <>
                        <form className="postsForm">
                            <Link to="/users/posts/add">
                                <button
                                    type="submit"
                                    className="btn btn-lg btn-primary add"
                                >Add Post</button>
                            </Link>
                        </form>
                    </>
                    : null
            }
            <PostResults
                posts={posts}
                deleteHandler={deleteHandler}
                user={user}
                token={token} 
            />
        </>
    )
}

export default Posts;