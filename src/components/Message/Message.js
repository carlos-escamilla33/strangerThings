import React from "react";
import Navbar from "../Navbar/Navbar.js"
import { callApi } from "../../apiCalls";

const Message = (props) => {
    const { token, post_id, author, user } = props;

    const fetchCreateMsg = async () => {
        try {
            const resp = callApi({
                url: `/posts/${post_id}/messages`,
                method: "POST",
                body: {
                    message: {
                        content
                    }
                }
            })
            console.log(resp)
            return resp
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        token && author !== user ? 
        <form>
            <p>Form here</p>
        </form> :
        null
    )
}

export default Message;