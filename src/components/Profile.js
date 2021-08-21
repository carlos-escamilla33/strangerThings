import React, { useState, useEffect } from "react";
import { fetchUserInfo } from "../apiCalls"
import UserPosts from "./UserPosts.js"

const Profile = (props) => {
    const { token } = props
    const [userInfo, setUserInfo] = useState([]);

    const fetchUser = async () => {
        try {
            const response = await fetchUserInfo(token);
            setUserInfo(response.posts)
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
            <h2>User Info</h2>
            {
                userInfo.map((info) => {
                    return (
                        <>
                            <div key={info._id}>
                                <h4>Messages: {info.location}</h4>
                                <h4>Messages: {info.messages}</h4>
                                <h4>Messages: {info.messages}</h4>
                                <h4>Messages: {info.messages}</h4>
                                <h4>Messages: {info.messages}</h4>
                                <h4>Messages: {info.messages}</h4>
                            </div>
                        </>
                    )
                })
            }
            <UserPosts token={token}/>
        </>
    )
}

export default Profile;