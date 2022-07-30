/**
 * It wait for the given seconds, but at most 10 seconds.
 *
 * @param {number} sec the seconds to wait
 * @returns {Promise} the promise which resolves when wait if over
 *                    or rejects if parameter is not correct
 */
module.exports = async function sleep(sec){
    if(!(typeof(sec)==="number"))
        await new Promise((resolve, reject) => {reject("Incorrect input")});
    sec > 10 ? 
        await new Promise(resolve => setTimeout(resolve, 10000)) : 
        await new Promise(resolve => setTimeout(resolve, sec*1000));
}
