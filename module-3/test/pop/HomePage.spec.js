const { expect } = require("chai");
const HomePage = require("../../pop/HomePage");
const ElementArrayFinder = require("../mock/ElementArrayFinder");
const ElementFinder = require("../mock/ElementFinder");

describe.only('HomePage Class', () => {
    // TODO: write tests
    beforeEach(() => {
        global.element = ElementFinder.element;
        global.element.all = ElementArrayFinder.all;
    });

    afterEach(() => {
        delete global.element;
    });

    it('should be defined', () => {
        expect(HomePage).to.be.instanceOf(Function);
    });

    describe ('Get', () =>{
        it('should have method to retrieve button', () => {
            const home = new HomePage();

            expect(home.logo).not.to.be.undefined;
            expect(home.logo.locator().css).to.equal('.header__logo');
        });
    });
});