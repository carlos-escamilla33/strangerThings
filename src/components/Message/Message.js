import React, { useState } from "react";
import { Link } from "react-router-dom"
import Navbar from "../Navbar/Navbar.js"
import { callApi } from "../../apiCalls";

const Message = (props) => {
    const { token, postId, author, user } = props;
    const [textArea, setTextArea] = useState("")

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

    const textAreaHandler = (event) => {
        setTextArea(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        // fetchCreateMsg(postId)
        console.log(textArea)
        setTextArea("")
    }

    return (
        token && author !== user ? 
        <form onSubmit={submitHandler}>
            <textarea 
            placeholder=" enter message here" 
            value={textArea} 
            onChange={textAreaHandler}
            autoFocus
             />
            <br />
            {
                textArea.length > 1 ? <button className="btn btn-lg btn-success">send message</button> : null
            }
        </form>
        :
        null
    )
}

export default Message;