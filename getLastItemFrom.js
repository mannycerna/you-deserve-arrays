const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

let indexOfArray = userArray[userArray.length-1];

console.log(indexOfArray);
