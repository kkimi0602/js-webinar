/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 * 
 * It prints out a message in case of any
 * difference in an array, using the console.warn!
 * 
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 */
module.exports = function arrayEqual(first, second){
    /*const equals = (a, b) =>
        a.length === b.length &&
        a.every((v, i) => v === b[i]);*/
    const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
    if(!equals(first,second))
        first.length != second.length ? console.warn(`${first.length} ${second.length}`) : console.warn(`${first} ${second}`);
    return equals(first,second);
    //
    //
}
