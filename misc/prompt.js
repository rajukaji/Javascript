const prompt = require("prompt-sync")({ sigint: true});
//use this code here to use the prompt in the terminal of vs code

let name = prompt("Enter your name: ");
console.log('Hi,', name);

//prompt takes string input only

//convert with Number() to use a number

let x = Number(prompt("Enter a number: "));
console.log(x + x)