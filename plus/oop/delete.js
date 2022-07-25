/**
 * It deletes the given property of the given object
 * and returns the new object.
 * The function must not modify the original object!
 * 
 * @param {object} o the object
 * @param {string} key the name of the property to delete
 * @returns {object} the new object without the given property
 */

function del(o, key){
    if(!(typeof o === 'object')){
        throw new Error("Invalid input!")
    }
    var result = Object.assign({},o)
    delete result[key];
    return result;
}
module.exports = del;