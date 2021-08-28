import React, { useState } from "react";
import { callApi } from "../../apiCalls";

const Message = (props) => {
    const { token, postId, author, user } = props;
    const [content, setContent] = useState("")

    const fetchCreateMsg = async (post_id) => {
        try {
            const resp = await callApi({
                url: `/posts/${post_id}/messages`,
                method: "POST",
                token,
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
        setContent(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        fetchCreateMsg(postId)
        setContent("")
    }

    return (
        token && author !== user ?
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        placeholder=" send message to seller"
                        value={content}
                        onChange={textAreaHandler}
                    />
                </div>
                {
                    content.length > 1 ?
                        <button
                            className="btn btn-lg btn-success">send message</button>
                        : null
                }
            </form>
            : 
            null
    )
}

export default Message;

