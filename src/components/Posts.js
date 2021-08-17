import React, { useState, useEffect } from "react";
import { fetchPostData } from "./api";

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
                        <div post={post.key}>
                            <h3>{post.title}</h3>
                            <div>{post.description}</div>
                            <div>{post.price}</div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Posts;