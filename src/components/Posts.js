import React, { useState, useEffect } from "react";
import { fetchPostData } from "../apiCalls/apiCalls";

const Posts = () => {
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
                posts.map(post => {
                    return (
                        <div key={post._id}>
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                            <h4>Price: {post.price}</h4>
                            <h4>Location: {post.location}</h4>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Posts;