const { element } = require("../test/mock/ElementFinder");
const ElementFinder = require("../test/mock/ElementFinder");

/**
 * Create an Element class that represents an element of
 * the application, and
 * 
 * 1. It has a protractor locator (.locator),
 *    e.g. by.css("h1.title")
 * 2. It has a name (.name), e.g. "Document Title"
 * 3. It can have a parent Element, 
 *    which is the context of the element (.parent)
 * 4. It can have children Elements (.children)
 * 5. It has a method to retrieve the protractor element
 *    by the locator (.get([name])) in it's context
 *     - if it gets a name as parameter, it tries to find
 *       in it's children (recursively) the Element with
 *       the given name or throws an Erorr if it cannot
 *       find the element
 * 
 * Use Protractor API to retrieve element
 * @see {@link https://www.protractortest.org/#/api?view=ElementFinder}
 */
class Element{
    constructor(name, locator){
        this.name = name;
        this.locator = locator;

        this.parent = null;
        this.children = {};
    }

    setParent(parent){
        this.parent = parent;
    }

    addChildren(child){
        if(this.children.hasOwnProperty(child.name)){
            throw new Error(child.name + " is already added!");
        }
        this.children[child.name] = child;
        this.children[child.name].setParent(this);
    }

    get(name){
        if(arguments.length == 0){
            return ElementFinder.element(this.locator);
        }else{
            if(this.children.hasOwnProperty(name)){
                return ElementFinder.element(this.children[name].locator);
            }else{
                for(const key in this.children){
                    return this.children[key].get(name);
                }
            }
        }
        throw new Error("Element is not available!");
    }

    
}
module.exports = Element;