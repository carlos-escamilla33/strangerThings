// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2105-SJS-RM-WEB-PT';
// Use the APIURL variable for fetch requests
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/`;

export const fetchPostData = async () => {
    try {
        const response = await fetch(`${APIURL}/posts`);
        const result = await response.json();

        if (result.error) throw result.error;
        return result.data.posts;
    } catch (err) {
        console.log(err);
    }
}