const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array"));

let returnLastItem = userArray[userArray.length -1];


if (userArray.length >= 4) {

    console.log(`If at least 4 items in array, per requirments return the 4th item (3rd index): ${userArray[3]}`);
    
} else {
    console.log(`If less than 4 items in array, per requirement, return the last item in the array: ${returnLastItem}`);
}

/*
const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));
let secondChar = userArray[2][1];

if(typeof userArray[2] === "string") {
    console.log(`Console logs out: ${userArray[2][1]}`);
} else {
    console.log(`Error, 3rd item does not evaluate to string, it is a: ${typeof userArray[3]} type`);
}
*/