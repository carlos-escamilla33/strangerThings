import React, { useState, useEffect } from "react";
import { callApi } from "../../apiCalls";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.js";
import PostResults from "../PostResults/PostResults.js";
import "./Posts.css";

const Posts = (props) => {
    const { token, user, setPosts, posts } = props;
    const [searchTerm, setSearchTerm] = useState("");
    
    const postMatches = (post, text) => post.includes(text)

    const filteredPosts = posts.filter(post => postMatches(post.title.toLowerCase(), searchTerm));

    const postToDisplay = searchTerm.length ? filteredPosts : posts;

    const inputHandler = (event) => {
        setSearchTerm(event.target.value)
    }

    const fetchPosts = async () => {
        try {
            const res = await callApi({
                url: "/posts",
            })
            console.log(res.data.posts)
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
            <div className="container">
                {
                    token ? <h5 className="display-5">Post a listing or search for one!</h5>
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
                                    className="btn btn-lg btn-primary"
                                >Add Post</button>
                            </Link>
                        </form>
                        <form>
                            <input
                                onChange={inputHandler}
                                value={searchTerm.toLowerCase()}
                                className="searchInput"
                                placeholder="search post"
                            />
                        </form>
                    </>
                    : null
            }
            <PostResults postToDisplay={postToDisplay} deleteHandler={deleteHandler} user={user} token={token}/>
        </>
    )
}

export default Posts;