/**
 * It receives an array of strings, integers and
 * arrays, like itself.
 * Return the summary of all integers in it on
 * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */
module.exports = function arraySum(elements){
    let strin = JSON.stringify(elements);
    strin = strin.replace(/[\])}[{(]/g,'');
    let arr = strin.split(',');
    let result = 0;
    for (const iterator of arr) 
        if(!isNaN(parseInt(iterator)) && elements.length > 1)
            result += parseInt(iterator);
    return result;

}