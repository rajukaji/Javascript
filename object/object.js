let person = {name: 'John Cena', age: 55};
//key value pair, is js object
console.log(person)

//ways to access value of key(property)
console.log(person['name'])
console.log(person.age)
//mutable, value can be changed, 
person.name = 'Shawn Michael'
console.log(person.name)

//add new property
person.address = 'U and SA'

console.log(person['address']);
console.log(person)

//to remove
delete person.address
console.log(person)