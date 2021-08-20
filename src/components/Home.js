import React from "react";

const Home = (props) => {
    const { user } = props;
    return (
        <>
            <h1>Welcome to Stranger Things</h1>

            {
                user.length > 1 ? 
                <h2>You are logged in as {user} </h2> :
                null

            }
        </>
    )
}

export default Home;