'use strict';

console.log('Script Loaded');

const generateMadlib = document.querySelector('#generateMadlib');

generateMadlib.addEventListener('submit', function (e) {
    e.preventDefault();
    // Select all inputs and our placeholders using the method `querySelectorAll()`
    const inputSelectors = document.querySelectorAll('input');
    const placeholders = document.querySelectorAll('.madlib_placeholder');

    // Use a `forEach` loop to create an array of values for our replacement words
    const inputArray = [];
    inputSelectors.forEach(function (inputItem) {
        inputArray.push(inputItem);
    });

    // Use a `forEach` loop to update the `innerHTML` of each placeholder
    // The `forEach()` method takes `index` as an agrgument,
    // which will return the index of a given item in the loop.
    placeholders.forEach(function (placeholder, index) {
        placeholder.innerHTML = inputArray[index].value;
    });
});
