let fruits = ['apple', 'banana', 'mango']
console.log(fruits);
console.log(fruits.length)//to find the array length

let misc = ['mango', 'TV', 12];
console.log(misc);

misc.push('man');
console.log(misc)

console.log(misc.slice(1, 3))
//slice method, slice(startIndex, lastIndex), last Index is exclusive

console.log(misc.slice(2))


let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = numbers.slice(6);
console.log(result);


console.log(`numbers ${numbers}`)