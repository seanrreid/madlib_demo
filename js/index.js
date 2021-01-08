'use strict';

console.log('Script Loaded');

const generateMadlib = document.querySelector('#generateMadlib');

generateMadlib.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputSelectors = document.querySelectorAll('input');
    const myName = document.querySelector('#myName');
    const mySubject = document.querySelector('#mySubject');

    inputSelectors.forEach(function (inputItem) {
        if (inputItem.name === 'myNameInput') {
            myName.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'mySubjectInput') {
            mySubject.innerHTML = inputItem.value;
        }
    });
});
