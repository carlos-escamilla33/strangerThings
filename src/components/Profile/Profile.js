import React, { useState, useEffect } from "react";
import { callApi } from "../../apiCalls";
import "./Profile.css";

const Profile = (props) => {
    const { token, user } = props
    const [posts, setPost] = useState([]);
    const [messages, setMessages] = useState([])

    const fetchUser = async () => {
        try {
            const resp = await callApi({
                url: "/users/me",
                token
            });
            setPost(resp.data.posts)
            setMessages(resp.data.messages)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchUser()
    }, []);

    return (

        messages.length !== 0 ?
            <div className="container">
                <h1 className="text-center display-3">My Posts:</h1>

                {
                    posts.map(post => {
                        return (
                            <div className="card border-dark text-center postSpacing" key={post._id}>
                                <h2 className="card-header">Title: {post.title}</h2>
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                        <p>Description: {post.description}</p>
                                        <p>Price: {post.price}</p>
                                        <p>Location: {post.location}</p>
                                    </blockquote>
                                </div>
                            </div>
                        )
                    })
                }

                <h1 className="text-center display-3">Messages:</h1>

                {
                    messages.map(message => {
                        return (
                             message.fromUser.username !== user ?
                                <div className="card text-center border-danger postSpacing" key={message._id}>
                                    <h2 className="card-header">from: {message.fromUser.username}</h2>
                                    <div className="card-body">
                                        <blockquote className="blockquote mb-0">
                                            <p>Your Listing: {message.post.title}</p>
                                            <p>Content: {message.content}</p>
                                        </blockquote>
                                    </div>
                                </div> 
                                : 
                                <div className="card text-center border-primary postSpacing" key={message._id}>
                                    <h2 className="card-header">(sent by me)</h2>
                                    <div className="card-body">
                                        <blockquote className="blockquote mb-0">
                                            <p>{message.post.title}</p>
                                            <p>Content: {message.content}</p>
                                        </blockquote>
                                    </div>
                                </div>
                        )
                    })
                }
            </div> : <h2 className="display-1 container">No user data yet...</h2>
    )
}

export default Profile;