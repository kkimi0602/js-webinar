/*
 * Rewrite the following code to use async/await 
 */
/*module.exports = function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                console.log(response.json())
                return response.json();
            } else {
                console.log(response.status)
                throw new Error(response.status);
            }
        });
};*/
module.exports = async function loadJson(url) {
    const result =  fetch(url);
    if( (await result).status == 200 ){
        return (await result).json();
    }
    throw new Error((await result).status);
}