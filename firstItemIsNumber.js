const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

if (userArray !== null && typeof userArray[0] === "number") {
    console.log(`The first item in array is: ${userArray[0]}, it is typeof:  ${typeof userArray[0]}.`);

} else {
    console.log(`the first item in array is not a number, it is a typeof: ${typeof userArray[0]}`);
}


//Another possible solution use a variable (itemIsNbr) eval using === for comparison//
/*
let itemIsNbr = typeof userArray[0]

if (itemIsNbr === "number") {
    console.log(`The first item in array is: ${userArray[0]}, it is typeof:  ${typeof userArray[0]}.`)
} else {
    console.log(`the first item in the is:  array is not a number, it is a typeof: ${typeof userArray[0]}`)
}
*/