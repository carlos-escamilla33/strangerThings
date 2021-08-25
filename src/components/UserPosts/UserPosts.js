import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { fetchCreatedPosts, fetchPostData } from "../../apiCalls";
import "./UserPosts.css";

const UserPosts = (props) => {
    const { token, setPosts } = props;
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");

    const refetchPosts = async () => {
        try {
            const res = await fetchPostData()
            setPosts(res);
        }
        catch (err) {
            console.log(err)
        }
    }

    const fetchUserPost = async () => {
        try {
            const response = await fetchCreatedPosts(token, title, description, price, location);
            await fetchPosts()
            return response
        }
        catch (err) {
            console.log(err);
        }
    }

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    }

    const priceChangeHandler = (event) => {
        setPrice(event.target.value)
    }

    const locationChangeHandler = (event) => {
        setLocation(event.target.value)
    }

    useEffect(() => {
        refetchPosts()
    }, [])

    const submitHandler = (event) => {
        event.preventDefault();
        fetchUserPost()
        history.push("/posts");
    }

    return (
        <>
            <form className="container userPostsForm" onSubmit={submitHandler}>
                <h2 className="centerUserPost">Tell us what you're selling</h2>
                <div className="centerUserPost">
                    <input 
                    className="userPostsInput"
                    placeholder=" Title"
                    value={title}
                    onChange={titleChangeHandler}
                    />
                </div>
                <div className="centerUserPost">
                    <input 
                    className="userPostsInput"
                    placeholder=" Description"
                    value={description}
                    onChange={descriptionChangeHandler}
                    />
                </div>
                <div className="centerUserPost">
                    <input 
                    className="userPostsInput"
                    placeholder=" Price"
                    value={price}
                    onChange={priceChangeHandler}
                     />
                </div>
                <div className="centerUserPost">
                    <input 
                    className="userPostsInput"
                    placeholder=" Location"
                    value={location}
                    onChange={locationChangeHandler}
                     />
                </div>
                <div className="centerUserPost">
                    <button className="btn btn-lg btn-primary listingBtn">Create Listing</button>
                </div>
            </form>
        </>
    )
}

export default UserPosts;