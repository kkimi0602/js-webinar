/**
 * It determines whether the given array is sorted in
 * alphabetically ascending order.
 * 
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 * 
 * @param {string[]} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */
 module.exports = function arraySorted(items, ignore){
    const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
    let arr;   
    for (let element of items) {
        let index = items.indexOf(element);
        if(typeof element == 'string'){
            element = element.replace(/[\r\n\t\s]/g,'');
            // /i használata esetén, v elhagyásával hibát dob a 4. tesztesetre
            element = element.toLowerCase();
        }
        if(arguments.length != 1){
            arr = ignore.split(''); 
            for (const iterator of arr) {
                element = element.replaceAll(iterator,'');
            }
        }
        items[index] = element;
    }
    const copy = [...items];
    copy.sort();
    //return equals(/items/i,/copy/i);
    return equals(items,copy);
}