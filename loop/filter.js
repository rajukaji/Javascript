//object.filter(function) , method
// Initialize the numbers

let numbers = [1, 4, 7, 10, 9, 2];

// Write your code here

function filterEvens(num)
{
    if (num%2 == 0)
        return num;
}

console.log(numbers.filter(filterEvens))
//prints array with filtered numbers that met the condition of filerEvens