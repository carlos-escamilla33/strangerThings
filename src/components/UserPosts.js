import React, {useState} from "react";
import { fetchCreatedPosts } from "../apiCalls"

const UserPosts = (props) => {
    const {token} = props
    [userPost, setUserPost] = useState("");

    const fetchUserPost = async (token) => {
        try {
            const response = await fetchCreatedPosts(token);
            setUserPosts(response.post)
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <form>
            <input />
        </form>
    )
}

export default UserPosts