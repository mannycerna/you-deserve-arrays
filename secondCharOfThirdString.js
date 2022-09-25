const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

let secondChar = userArray[2][1];

if(typeof userArray[2] === "string") {
    console.log(`Console logs out: ${userArray[2][1]}`);
} else {
    console.log(`Error, 3rd item does not evaluate to string, it is a: ${typeof userArray[2]} type`);
}

// First draft below: 
/*
console.log(userArray[2][1]);
console.log (`The second character of third item console logs as ${secondChar}.  The reason is:  The [] operator converts the expression inside the square brackets to a string. `);

// if (secondChar === "string") {
//     console.log(`The second char of the third item in array is: ${userArray[3][2]}, so item is typeof:  ${typeof userArray[3]}.`);

// } else 

if (typeof userArray[2] !== "string"){
    console.log(`Error, 3rd item does not evaluate to string, it is a typeof: ${typeof userArray[2]}`);
}
*/