import React, { useState, useEffect } from "react";
import { fetchUserNotifs } from "../../apiCalls";
import "./Profile.css";

const Profile = (props) => {
    const { token } = props
    const [posts, setPost] = useState([]);
    const [messages, setMessages] = useState([])

    const fetchUser = async () => {
        try {
            const response = await fetchUserNotifs(token);
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
        <div className="container">
            <h1 className="text-center display-3">My Posts:</h1>


            {
                posts ? posts.map(post => {
                    return (
                        <div className="card postSpacing" key={post._id}>
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

            <h1 className="text-center display-3">Messages Recieved :</h1>

            {
                messages ? messages.map(message => {
                    return (
                        <div className="card postSpacing" key={message._id}>
                            <h2 className="card-header">Your Listing: {message.post.title}</h2>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>From: {message.fromUser.username}</p>
                                    <p>Content: {message.content}</p>
                                </blockquote>
                            </div>
                        </div>
                    )
                })
                :
                <h3>No User info yet...</h3>
            }
        </div>
    )
}

export default Profile;