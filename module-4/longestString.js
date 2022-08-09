/**
 * It receives an array of strings and returns
 * the first longest string from it.
 * Also, in the alphabetically first in case of more.
 *
 * @param {string[]} strings
 * @returns {string} longest string or empty string in other cases
 */
 module.exports = function longestString(strings){
    let max = 0;
    let array = [""];
    if(Array.isArray(strings) && strings.length > 0){
        for (const iterator of strings){ 
            if(typeof iterator == 'string'){
                array.push(iterator);
                if(max < iterator.length){
                    max = iterator.length;
                }
            }
        }
        let fil = array.filter(word => word.length == max);
        fil.sort();
        return fil[0];
    }
    return "";
 }