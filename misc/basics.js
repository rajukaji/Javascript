//strings are immutable
let str1 = 'Nepal';

str1[2] = 'm'

//its not possible, 
console.log(str1)//returns the original string

//we can reassign though

str1 = 'Kathmandu'
console.log(str1)

console.log(str1.slice(1, 5));

let lowerCase = str1.toLowerCase();
console.log(lowerCase);

let upperCase = lowerCase.toUpperCase();
console.log(upperCase);