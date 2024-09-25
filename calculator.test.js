const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Load the HTML file into JSDOM
const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
const dom = new JSDOM(html);
global.document = dom.window.document;
global.window = dom.window;

// Load the calculator script
require('./calculator');

describe('Calculator', () => {
    let displayElement;

    beforeEach(() => {
        displayElement = document.querySelector('.display');
    });

    test('should add two numbers', () => {
        document.querySelector('button[data-value="1"]').click();
        document.querySelector('button[data-value="+"]').click();
        document.querySelector('button[data-value="2"]').click();
        document.querySelector('button[data-value="="]').click();
        expect(displayElement.innerText).toBe('3');
    });

    test('should subtract two numbers', () => {
        document.querySelector('button[data-value="5"]').click();
        document.querySelector('button[data-value="-"]').click();
        document.querySelector('button[data-value="3"]').click();
        document.querySelector('button[data-value="="]').click();
        expect(displayElement.innerText).toBe('2');
    });

    test('should multiply two numbers', () => {
        document.querySelector('button[data-value="4"]').click();
        document.querySelector('button[data-value="*"]').click();
        document.querySelector('button[data-value="3"]').click();
        document.querySelector('button[data-value="="]').click();
        expect(displayElement.innerText).toBe('12');
    });

    test('should divide two numbers', () => {
        document.querySelector('button[data-value="8"]').click();
        document.querySelector('button[data-value="/"]').click();
        document.querySelector('button[data-value="2"]').click();
        document.querySelector('button[data-value="="]').click();
        expect(displayElement.innerText).toBe('4');
    });

    test('should handle division by zero', () => {
        document.querySelector('button[data-value="8"]').click();
        document.querySelector('button[data-value="/"]').click();
        document.querySelector('button[data-value="0"]').click();
        document.querySelector('button[data-value="="]').click();
        expect(displayElement.innerText).toBe('Error: Cannot Divide by 0');
    });

    test('should clear the display', () => {
        document.querySelector('button[data-value="5"]').click();
        document.querySelector('button[data-value="Reset"]').click();
        expect(displayElement.innerText).toBe('');
    });

    test('should delete the last character', () => {
        document.querySelector('button[data-value="5"]').click();
        document.querySelector('button[data-value="Del"]').click();
        expect(displayElement.innerText).toBe('');
    });

    test('should handle decimal points', () => {
        document.querySelector('button[data-value="5"]').click();
        document.querySelector('button[data-value="."]').click();
        document.querySelector('button[data-value="5"]').click();
        expect(displayElement.innerText).toBe('5.5');
    });
});