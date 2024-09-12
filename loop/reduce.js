//object.reduce(function, initial value)
let numbers = [1, 2, 3, 4, 5];

// Write your code here

function sum(total, element)
{
    return total + element;
}

console.log(numbers.reduce(sum, 0));//0 is the initial value fo r total arguement, 

// Initialize the array
let letters = ['H', 'e', 'l', 'l', 'o'];

function joinMe(str, letters)
{
    return str + letters;
}

console.log(letters.reduce(joinMe, ''))

//'' is the initial value for str arguement, 