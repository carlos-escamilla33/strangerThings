import React, { useState } from "react";
import Message from "../Message/Message.js";
import "./PostResults.css";

const PostResults = (props) => {
    const { postToDisplay, user, deleteHandler, token } = props;

    return (
        postToDisplay.map(post => {
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
                    <Message
                        postId={post._id}
                        token={token}
                        author={post.author.username}
                        user={user}
                    />
                </div>
            )
        })
    )
}

export default PostResults;