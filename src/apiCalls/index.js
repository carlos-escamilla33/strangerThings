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

const fetchUserInfo = async (token) => {
    try {
        const response = await fetch(`${APIURL}/users/me`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        })
        const result = await response.json()
        return result;
    }
    catch (err) {
        console.log(err);
    }
}

