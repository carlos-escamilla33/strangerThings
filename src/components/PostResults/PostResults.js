import React, { useState } from "react";
import Message from "../Message/Message.js";
import "./PostResults.css";

const PostResults = (props) => {
    const { posts, user, deleteHandler, token } = props;
    const [searchTerm, setSearchTerm] = useState("");

    const postMatches = (post, text) => post.includes(text)

    const filteredPosts = posts.filter(post => postMatches(post.title.toLowerCase(), searchTerm));

    const postToDisplay = searchTerm.length ? filteredPosts : posts;

    const inputHandler = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <>
            <hr />
            <form className="container centerSearchBar spacing">
                <input
                    onChange={inputHandler}
                    value={searchTerm.toLowerCase()}
                    className="searchInput"
                    placeholder=" search post"
                />
            </form>
            {
                postToDisplay.map(post => {
                    return (
                        <div className="card text-center spacing" key={post._id}>
                            <div className="card-header">
                                <h3>{post.title}</h3>
                            </div>
                            <div className="card-body">
                                <h5 className="display-6">Price: {post.price}</h5>
                                <h5 className="display-6">Location: {post.location}</h5>
                                <p className="lead"> Seller: {post.author.username}</p>
                                <p className="lead"> Description: {post.description}</p>
                                {
                                    token && post.author.username === user ?
                                        <>
                                            <button
                                                type="submit"
                                                onClick={() => deleteHandler(post._id)}
                                                className="btn btn btn-danger delete"
                                            >Delete</button>
                                        </>
                                        : null
                                }
                                <Message
                                    postId={post._id}
                                    token={token}
                                    author={post.author.username}
                                    user={user}
                                />
                            </div>

                        </div>
                    )
                })
            }
        </>
    )
}

export default PostResults;