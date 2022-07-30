/**
 * Create HomePage class representing the EPAM.com home page.
 * Add main widgets and element of the page and write tests
 * for it (test/pop/HomePage.spec.js).
 */
const Layout = require('./Layout');
const Element = require('./Element');
const Elements = require('./Elements');

module.exports = class HomePage extends Layout {
    constructor() {
        super('/');

        /*this.header = new Element('Header', by.css('header'));
        this.header.addChildren(new Element("Logo", by.css('.header__logo')));
        this.menuItems = new Elements("Menu Items", by.css('.top-navigation__item-link'));
        this.button = new Element("Button", by.css('.cta-button--envelope'));*/
        this.header = new Element('Header', { css: 'header'});
        
        this.header.addChildren(new Element("Logo", { css: '.header__logo'}));

        this.menuItems = new Elements("Menu Items", { css: '.top-navigation__item-link'});
        
        this.header.addChildren(new Element("Button", { css: '.cta-button--envelope'}));
        this.addChildren(this.header);
        this.addChildren(this.menuItems);
    }

    get logo() {
        return this.get('Logo');
    }
    button(){
        return this.get('Button');
    }
}