/**
 * Create the Circle class.
 *
 * @typedef {object} Circle
 * @property {number} r the radius of the circle
 * @function getArea return the area of the circle
 * @function getPerimeter return the perimeter of the circle
 */

module.exports = class Circle{
    constructor(r){
        if(r < 1) 
            throw new Error("Invalid radius!") 
        else
             this.r = r;   
    }
    getArea(){
        return Math.PI * (this.r ** 2);
    }
    getPerimeter(){
        return 2 * Math.PI * this.r;
    }
}
