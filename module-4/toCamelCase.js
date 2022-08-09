/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */
module.exports = function toCamelCase(toConvert){
    let arr;
    if(typeof toConvert != 'string')
        return '';
    else{
        toConvert = toConvert.replace(/[.!?]/g,'');
        arr = toConvert.split(/[\r\n\t\s]/)
        for (let i = 0; i < arr.length;){
            if(arr[i] != ''){
                arr[i] = arr[i].replace(arr[i].charAt(0).toString(),arr[i].charAt(0).toString().toUpperCase());
                i++;
            }
            else{
                arr.splice(i,1);
            }    
        }
        arr[0] = arr[0].replace(arr[0].charAt(0).toString(),arr[0].charAt(0).toString().toLowerCase());
        toConvert = arr.join('');
    }
    return toConvert;
}