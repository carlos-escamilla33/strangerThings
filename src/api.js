// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2105-SJS-RM-WEB-PT';
// Use the APIURL variable for fetch requests
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/`;

export const fetchPostData = async () => {
    try {
        const response = await fetch(`${APIURL}/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TOKEN_STRING_HERE'
            },
            body: JSON.stringify({
                post: {
                    title: "My favorite stuffed animal",
                    description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
                    price: "$480.00",
                    willDeliver: true
                }
            })
        });
        const result = await response.json();
        return result;
    } 
    catch (err) {
        console.log(err);
    }
}

// export const fetchRegisterData = async () => {
//     try {
//         const response = await fetch(`${APIURL}/users/register`,)
//     }
// }