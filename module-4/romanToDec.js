/**
 * It receives a Roman number (as string)
 * and converts it to its Arabic (decimal) equivalent.
 *
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @param {string} roman
 * @returns {number} the Arabic (decimal) equivalent of the parameter
 * @throws Error in case of invalid input
 */
 module.exports = function romanToDec(roman){
    const rom = {
        i:1,
        v:5,
        x:10,
        l:50,
        c:100,
        d:500,
        m:1000
    }
    let dec = 0;
    if(typeof roman != 'string'){
        console.warn("Not a string");
        return false;
    }
    for (let i = 1; i < roman.length; i++) {
        if(isNaN(rom[roman[i]])){
            console.warn("Not a valid roman number");
            return false;
        }
        const element =rom[roman[i]];
        const element_1 =  rom[roman[i-1]];
        element_1 < element ? dec -= element_1 : dec += element_1;
    }
    dec += rom[roman[roman.length-1]];
    return dec;
}