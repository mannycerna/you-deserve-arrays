

const prompt = require('prompt-sync')({sigint: true});
let userArray = JSON.parse(prompt("Enter an array: "));
let indexOfArray = userArray[0];

console.log(indexOfArray);

