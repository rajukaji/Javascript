// query selector

const logo = document.querySelector('#logo');

console.log(logo);


const listItem = document.querySelector("li");

console.log(listItem);

/*As you can see, querySelector("li") selects the element with the 
first li tag (Home).

This happens because querySelector() selects only the first element 
that matches the specified selector.

querySelector() returns the first element that matches the specified
*/

Selecting Multiple Elements
// Since querySelector() only selects the first matching element,
//  you must use querySelectorAll() to select multiple elements.

const listItems = document.querySelectorAll("li");
 
console.log(listItems);

// As you can see, querySelectorAll("li") returns an array-like
//  object called NodeList that contains all selected items.

// You can access each item in the NodeList using the item() method

// You can access elements from a NodeList by simply using indexes.

const listItems = document.querySelectorAll("li");
 
console.log(listItems[0]);

/*
As you can see, listItems[0] accesses the first item using index 0.

Similarly, you can access other items in the NodeList using their 
corresponding index values.

*/
const divElements = document.querySelectorAll("div");
console.log(divElements);

