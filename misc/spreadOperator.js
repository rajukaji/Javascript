const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
//... is a spread operator

console.log(combined);

//destructure and spread

let arr = [1, 2, 3, 4, 5, 6]

let [a, b, c, d, e, f] = arr 
//destructured like python mapping
console.log(a)

let [x, y, ...rest] = arr
console.log(y)
console.log(...arr)