import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchCreatedPosts } from "../apiCalls";
import "./css/userinfo.css";

const UserPosts = (props) => {
    const { token } = props;
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");

    const fetchUserPost = async () => {
        try {
            const response = await fetchCreatedPosts(token, title, description, price, location);
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

    const submitHandler = (event) => {
        event.preventDefault();
        fetchUserPost();
        history.push("/posts");
    }

    return (
        <>
            <form className="container" onSubmit={submitHandler}>
                <h2 className="center">Tell us what you're selling</h2>
                <div className="center">
                    <input 
                    placeholder=" Title"
                    value={title}
                    onChange={titleChangeHandler}
                    />
                </div>
                <div className="center">
                    <input 
                    placeholder=" Description"
                    value={description}
                    onChange={descriptionChangeHandler}
                    />
                </div>
                <div className="center">
                    <input 
                    placeholder=" Price"
                    value={price}
                    onChange={priceChangeHandler}
                     />
                </div>
                <div className="center">
                    <input 
                    placeholder=" Location"
                    value={location}
                    onChange={locationChangeHandler}
                     />
                </div>
                <div className="center">
                    <button className="btn btn-lg btn-primary">Create Listing</button>
                </div>

            </form>
        </>
    )
}

export default UserPosts;