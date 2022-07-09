/**
 * The function returns the nth value of
 * the Fibonacci sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number} Fibonacci number or 0 if any arguments are not proper
 */
function fibonacci(n) {
    let nThFibonacci = 1;
    let b = 1;
    let actual = 2;
    let tmp;
    /*
     * Your task is to calculate the nth value of the
     * Fibonacci sequence.
     * https://en.wikipedia.org/wiki/Fibonacci_number
     * Store the value in the nThFibonacci variable.
     * Also, take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...
    if(n <= 0)
        return 0;
    if(n == 1)
        return 1;
    while(actual != n){
        tmp = actual;
        actual += b;
        b = tmp; 
        nThFibonacci++;
    }
    // ...AND THIS COMMENT LINE!
    return nThFibonacci;
}
module.exports = fibonacci;