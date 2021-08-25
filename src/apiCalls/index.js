// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2105-SJS-RM-WEB-PT';
// Use the APIURL variable for fetch requests
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/`;

export const fetchPostData = async () => {
    try {
        const response = await fetch(`${APIURL}/posts`)
        const result = await response.json();
        console.log(result)
        return result.data.posts;
    }
    catch (err) {
        console.log(err);
    }
}

export const fetchRegisterData = async (username, password) => {
    try {
        const response = await fetch(`${APIURL}/users/register/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    username,
                    password
                }
            })
        })
        const result = await response.json();
        return result.data
    }
    catch (err) {
        console.log(err)
    }
}

export const fetchLoginData = async (username, password) => {
    try {
        const response = await fetch(`${APIURL}/users/login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username,
                    password
                }
            })
        })
        const result = await response.json()
        return result.data;
    }
    catch (err) {
        console.log(err)
    }
}

export const fetchCreatedPosts = async (token, title, description, price, location) => {
    try {
        const response = await fetch(`${APIURL}/posts/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                    title,
                    description,
                    price,
                    location
                }
            })
        })
        const result = await response.json()
        return result.data.posts
    }
    catch (err) {
        console.log(err)
    }
}

export const fetchUserNotifs = async (token) => {
    try {
        const response = await fetch(`${APIURL}/users/me/`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const result = await response.json()
        return result.data;
    }
    catch (err) {
        console.log(err);
    }
}

export const fetchSendMessage = async (POST_ID, token) => {
    try {
        const response = await fetch(`${APIURL}/posts/${POST_ID}/messages/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                message: {
                    content
                }
            })
        });
        const result = await response.json()
        return result.data.message

    }
    catch (err) {
        console.log(err)
    }
}

export const fetchDelete = async ([post_id, token]) => {
    try {
        const response = await fetch(`${APIURL}/posts/${post_id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            } 
        })
        const result = response.json();
        return result
    }
    catch (err) {
        console.log(err)
    }
}
