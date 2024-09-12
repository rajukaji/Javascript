let x = '14'

console.log(typeof(Number(x)))

console.log(x)

console.log(typeof(x))

x = 13.555

console.log(parseInt(x))
//integer conversion
x = '13.4444'
x = parseFloat(x)
console.log(x)

x = 13
x = parseFloat(x)
console.log(x)

x = 'string'
x = Number(x)
console.log(x)
//this is not a number, NaN

console.log(typeof(x))