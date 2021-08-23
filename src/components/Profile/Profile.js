import React, { useState, useEffect } from "react";
import { fetchUserInfo } from "../../apiCalls";
// import "./css/style.css";

const Profile = (props) => {
    const { token } = props
    const [posts, setPost] = useState([]);
    const [messages, setMessages] = useState([])

    const fetchUser = async () => {
        try {
            const response = await fetchUserInfo(token);
            setPost(response.posts)
            setMessages(response.messages)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchUser()
    }, []);

    return (
        <>
            <h1 className="center">My Posts:</h1>


            {
                posts ? posts.map(post => {
                    return (
                        <div className="card" key={post._id}>
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
                :
                <h3>No posts yet...</h3>
            }

            <h1 className="center">My Messages:</h1>

            {
                messages ? messages.map(message => {
                    return (
                        <div className="card" key={message._id}>
                            <h2 className="card-header">Your Listing: {message.post.title}</h2>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>From: {message.fromUser.username}</p>
                                    <p>Content: {message.content}</p>
                                </blockquote>
                                <button type="submit" className="btn btn-primary">Reply</button>
                            </div>
                        </div>
                    )
                })
                :
                <h3>No Messages yet...</h3>
            }
        </>
    )
}

export default Profile;