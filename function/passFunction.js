function doArithmetic(n1, n2, operation) {
    const result = operation(n1, n2); 
    return result;
}
 
// Calling doArithmetic with sum as argument
let add = doArithmetic(10, 5, function (n1, n2) {
    return n1 + n2;
}); 
console.log("Sum:", add);// Sum: 15

function sum(n1, n2) {
    return n1 + n2;
}
 
// function that does arithmetic
function doArithmetic(n1, n2, operation) {
    const result = operation(n1, n2); 
    return result;
}
 
// calling doArithmetic with sum as argument
let add = doArithmetic(10, 5, sum); 
console.log("Sum:", add);     // Sum: 15 