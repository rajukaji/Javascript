// json object
const jsonData = '{ "name": "John", "age": 22 }';
 
// converting to JavaScript object
const obj = JSON.parse(jsonData);
 
console.log(obj); // { name: 'John', age: 22 }
 
// accessing the data
console.log(obj.name); // John
console.log(obj.age); // 22