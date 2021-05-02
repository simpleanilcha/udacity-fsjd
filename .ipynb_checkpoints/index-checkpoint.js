const util = require('./utilities/serveArray1.js');
const { lgNum, cut3 } = require('./utilities/serveArray2.js');

const numArr = [1, 3, 4, 6, 9];
const wordArr = ['apple', 'banana', 'grapes', 'orange'];

// Add numbers in an Array
console.log(util.sum(numArr))

// Concatenate two arrays
console.log(util.concat(numArr, wordArr))

// Find the largest number in an Array
console.log(lgNum(numArr))

// Remove the 3rd item from an Array
console.log(cut3(wordArr))