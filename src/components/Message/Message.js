import React, {useState} from "react";
import Navbar from "../Navbar/Navbar.js"
import { callApi } from "../../apiCalls";

const Message = (props) => {
    const { token, postId, author, user } = props;
    const [show, setShow] = useState(false)

    const fetchCreateMsg = async (post_id) => {
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


    const submitHandler = (event) => {
        fetchCreateMsg(postId)
        event.preventDefault()
    }

    return (
        token && author !== user ?
            <>
                <button onClick={()=> setShow(true)}>Message</button>
            </>
            :
            <h1>Loading...</h1>
    )
}

export default Message;