import React, { useState, useEffect } from "react";
import { fetchUserInfo } from "../apiCalls"

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
            <h1>SetUp Profile Page</h1>

           {
               userInfo.map(info => {
                   return (
                       <h1>{info.posts}</h1>
                   )
               })
           }
        </>
    )
}

export default Profile;